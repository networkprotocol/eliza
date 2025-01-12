import { SearchMode, Tweet } from "agent-twitter-client";
import {
    composeContext,
    generateMessageResponse,
    generateShouldRespond,
    messageCompletionFooter,
    shouldRespondFooter,
    Content,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
    stringToUuid,
    elizaLogger,
    getEmbeddingZeroVector,
} from "@ai16z/eliza";
import { ClientBase } from "./base";
import { buildConversationThread, sendTweet, wait } from "./utils.ts";

export const infectionGameTemplate = `
# Areas of Expertise
{{knowledge}}

# About {{agentName}} (@{{twitterUserName}}):
{{bio}}
{{lore}}
{{topics}}

{{providers}}

{{characterPostExamples}}

{{postDirections}}

Recent interactions between {{agentName}} and other users:
{{recentPostInteractions}}

{{recentPosts}}

Player Profile:
{{playerProfileBio}}

Player recent posts:
{{playerRecentPosts}}

Player Stats:
- Infection Score: {{infectionScore}}
- Immunity Score: {{immunityScore}}
- Infected Accounts: {{infectedAccounts}}

# Task: Generate a post/reply in the voice, style and perspective of {{agentName}} (@{{twitterUserName}}) while using the thread of tweets as additional context:
Current Post:
{{currentPost}}

Thread of Tweets You Are Replying To:
{{formattedConversation}}

{{actions}}
# Task: Generate a post in the voice, style and perspective of {{agentName}} (@{{twitterUserName}}). You MUST include an action if the current post text includes a prompt that is similar to one of the available actions mentioned here:
{{actionNames}}
Here is the current post text again. Remember to include an action if the current post text includes a prompt that asks for one of the available actions mentioned above (does not need to be exact)
{{currentPost}}

Note: Higher immunity scores reduce infection success rate. If player has infection score, it means they are infected. Include amount of infected accounts in response. Also, try to include some information from user's recent posts or profile.
` + messageCompletionFooter;

export const twitterMessageHandlerTemplate =`
# Areas of Expertise
{{knowledge}}

# About {{agentName}} (@{{twitterUserName}}):
{{bio}}
{{lore}}
{{topics}}

{{providers}}

{{characterPostExamples}}

{{postDirections}}

Recent interactions between {{agentName}} and other users:
{{recentPostInteractions}}

{{recentPosts}}

# Task: Generate a post/reply in the voice, style and perspective of {{agentName}} (@{{twitterUserName}}) while using the thread of tweets as additional context:
Current Post:
{{currentPost}}

Thread of Tweets You Are Replying To:
{{formattedConversation}}

{{actions}}
# Task: Generate a post in the voice, style and perspective of {{agentName}} (@{{twitterUserName}}). You MUST include an action if the current post text includes a prompt that is similar to one of the available actions mentioned here:
{{actionNames}}
Here is the current post text again. Remember to include an action if the current post text includes a prompt that asks for one of the available actions mentioned above (does not need to be exact)
{{currentPost}}
` + messageCompletionFooter;

export const twitterShouldRespondTemplate = (targetUsersStr: string) =>
    `# INSTRUCTIONS: Determine if {{agentName}} (@{{twitterUserName}}) should respond to the message and participate in the conversation. Do not comment. Just respond with "true" or "false".

Response options are RESPOND, IGNORE and STOP.

PRIORITY RULE: ALWAYS RESPOND to these users regardless of topic or message content: ${targetUsersStr}. Topic relevance should be ignored for these users.

For other users:
- {{agentName}} should RESPOND to messages directed at them
- {{agentName}} should RESPOND to conversations relevant to their background
- {{agentName}} should STOP if asked to stop
- {{agentName}} should STOP if conversation is concluded

{{recentPosts}}

IMPORTANT: For users not in the priority list, {{agentName}} (@{{twitterUserName}}) should err on the side of IGNORE rather than RESPOND if in doubt.

{{recentPosts}}

{{currentPost}}

Thread of Tweets You Are Replying To:

{{formattedConversation}}

# INSTRUCTIONS: Respond with [RESPOND] if {{agentName}} should respond, or [IGNORE] if {{agentName}} should not respond to the last message and [STOP] if {{agentName}} should stop participating in the conversation.
` + shouldRespondFooter;

export class TwitterInteractionClient {
    client: ClientBase;
    runtime: IAgentRuntime;
    constructor(client: ClientBase, runtime: IAgentRuntime) {
        this.client = client;
        this.runtime = runtime;
    }

    async start() {
        const handleTwitterInteractionsLoop = () => {
            this.handleTwitterInteractions();
            setTimeout(
                handleTwitterInteractionsLoop,
                Number(
                    this.runtime.getSetting("TWITTER_POLL_INTERVAL") || 120
                ) * 1000 // Default to 2 minutes
            );
        };
        handleTwitterInteractionsLoop();
    }

    async handleTwitterInteractions() {
        elizaLogger.log("Checking Twitter interactions");
        // Read from environment variable, fallback to default list if not set
        const targetUsersStr = this.runtime.getSetting("TWITTER_TARGET_USERS");

        const twitterUsername = this.client.profile.username;
        elizaLogger.info("twitterUsername:", twitterUsername);
        try {
            // Check for mentions
            const mentionCandidatesNonFiltered = (
                await this.client.fetchSearchTweets(
                    `@${twitterUsername}`,
                    20,
                    SearchMode.Top
                )
            ).tweets;

            const mentionCandidates = mentionCandidatesNonFiltered;
            // for (let i = 0; i < mentionCandidatesNonFiltered.length; i++) {
            //     if (
            //         mentionCandidatesNonFiltered[i].username !=
            //         twitterUsername
            //     ) {
            //         elizaLogger.info(
            //             "mentionCandidatesNonFiltered[i]:",
            //             mentionCandidatesNonFiltered[i]
            //         );
            //         mentionCandidates.push(
            //             mentionCandidatesNonFiltered[i]
            //         );
            //     }
            // }

            elizaLogger.info("mentionCandidates:", mentionCandidates);
            elizaLogger.log("Completed checking mentioned tweets:",mentionCandidates.length);

            let uniqueTweetCandidates = [...mentionCandidates];
            // Only process target users if configured
            if (targetUsersStr && targetUsersStr.trim()) {
                const TARGET_USERS = targetUsersStr
                    .split(",")
                    .map((u) => u.trim())
                    .filter((u) => u.length > 0); // Filter out empty strings after split

                elizaLogger.log("Processing target users:", TARGET_USERS);

                if (TARGET_USERS.length > 0) {
                    // Create a map to store tweets by user
                    const tweetsByUser = new Map<string, Tweet[]>();

                    // Fetch tweets from all target users
                    for (const username of TARGET_USERS) {
                        try {
                            const userTweets = (
                                await this.client.twitterClient.fetchSearchTweets(
                                    `from:${username}`,
                                    3,
                                    SearchMode.Latest
                                )
                            ).tweets;

                            // Filter for unprocessed, non-reply, recent tweets
                            const validTweets = userTweets.filter((tweet) => {
                                const isUnprocessed =
                                    !this.client.lastCheckedTweetId ||
                                    parseInt(tweet.id) >
                                        this.client.lastCheckedTweetId;
                                const isRecent =
                                    Date.now() - tweet.timestamp * 1000 <
                                    2 * 60 * 60 * 1000;

                                elizaLogger.log(`Tweet ${tweet.id} checks:`, {
                                    isUnprocessed,
                                    isRecent,
                                    isReply: tweet.isReply,
                                    isRetweet: tweet.isRetweet,
                                });

                                return (
                                    isUnprocessed &&
                                    !tweet.isReply &&
                                    !tweet.isRetweet &&
                                    isRecent
                                );
                            });

                            if (validTweets.length > 0) {
                                tweetsByUser.set(username, validTweets);
                                elizaLogger.log(
                                    `Found ${validTweets.length} valid tweets from ${username}`
                                );
                            }
                        } catch (error) {
                            elizaLogger.error(
                                `Error fetching tweets for ${username}:`,
                                error
                            );
                            continue;
                        }
                    }

                    // Select one tweet from each user that has tweets
                    const selectedTweets: Tweet[] = [];
                    for (const [username, tweets] of tweetsByUser) {
                        if (tweets.length > 0) {
                            // Randomly select one tweet from this user
                            const randomTweet =
                                tweets[
                                    Math.floor(Math.random() * tweets.length)
                                ];
                            selectedTweets.push(randomTweet);
                            elizaLogger.log(
                                `Selected tweet from ${username}: ${randomTweet.text?.substring(0, 100)}`
                            );
                        }
                    }

                    // Add selected tweets to candidates
                    uniqueTweetCandidates = [
                        ...mentionCandidates,
                        ...selectedTweets,
                    ];
                }
            } else {
                elizaLogger.log(
                    "No target users configured, processing only mentions"
                );
            }

            // // Sort tweet candidates by ID in ascending order
            // uniqueTweetCandidates
            //     .sort((a, b) => a.id.localeCompare(b.id))
            //     .filter((tweet) => tweet.userId !== this.client.profile.id);

            // for each tweet candidate, handle the tweet
            for (const tweet of uniqueTweetCandidates) {

                elizaLogger.info("unique tweet: ", tweet);

                if (
                    !this.client.lastCheckedTweetId ||
                    BigInt(tweet.id) > this.client.lastCheckedTweetId
                ) {
                    // Generate the tweetId UUID the same way it's done in handleTweet
                    const tweetId = stringToUuid(
                        tweet.id + "-" + this.runtime.agentId
                    );

                    // Check if we've already processed this tweet
                    const existingResponse =
                        await this.runtime.messageManager.getMemoryById(
                            tweetId
                        );

                    elizaLogger.info("existingResponse:", existingResponse);

                    if (existingResponse) {
                        elizaLogger.log(
                            `Already responded to tweet ${tweet.id}, skipping`
                        );
                        continue;
                    }
                    elizaLogger.log("New Tweet found", tweet.permanentUrl);

                    const roomId = stringToUuid(
                        tweet.conversationId + "-" + this.runtime.agentId
                    );

                    const userIdUUID =
                        tweet.userId === this.client.profile.id
                            ? this.runtime.agentId
                            : stringToUuid(tweet.userId!);

                    await this.runtime.ensureConnection(
                        userIdUUID,
                        roomId,
                        tweet.username,
                        tweet.name,
                        "twitter"
                    );

                    const thread = await buildConversationThread(
                        tweet,
                        this.client
                    );

                    const message = {
                        content: { text: tweet.text },
                        agentId: this.runtime.agentId,
                        userId: userIdUUID,
                        roomId,
                    };

                    await this.handleTweet({
                        tweet,
                        message,
                        thread,
                    });

                    // Update the last checked tweet ID after processing each tweet
                    this.client.lastCheckedTweetId = BigInt(tweet.id);
                }
            }

            // Save the latest checked tweet ID to the file
            await this.client.cacheLatestCheckedTweetId();

            elizaLogger.log("Finished checking Twitter interactions");
        } catch (error) {
            elizaLogger.error("Error handling Twitter interactions:", error);
        }
    }

    private async handleTweet({
        tweet,
        message,
        thread,
    }: {
        tweet: Tweet;
        message: Memory;
        thread: Tweet[];
    }) {
        if (tweet.userId === this.client.profile.id) {
            // console.log("skipping tweet from bot itself", tweet.id);
            // Skip processing if the tweet is from the bot itself
            return;
        }

        if (!message.content.text) {
            elizaLogger.log("Skipping Tweet with no text", tweet.id);
            return { text: "", action: "IGNORE" };
        }

        elizaLogger.log("Processing Tweet: ", tweet.id);
        const formatTweet = (tweet: Tweet) => {
            return `  ID: ${tweet.id}
  From: ${tweet.name} (@${tweet.username})
  Text: ${tweet.text}`;
        };
        const currentPost = formatTweet(tweet);

        elizaLogger.debug("Thread: ", thread);
        const formattedConversation = thread
            .map(
                (tweet) => `@${tweet.username} (${new Date(
                    tweet.timestamp * 1000
                ).toLocaleString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    month: "short",
                    day: "numeric",
                })}):
        ${tweet.text}`
            )
            .join("\n\n");

        const profile = await this.fetchProfile(tweet.username);
        const score = await this.fetchScore(tweet.username);

        let infectionScore = 0;
        let immunityScore = 0;
        const infectedAccounts = score.accsInfected;

        const recentPostsFormated = profile.recentPosts.map((post) => {
            return `${post.content}`;
        }).join("\n");

        if (score.immunity)
        {
            infectionScore = 0;
            immunityScore = score.score;
        }else{
            infectionScore = score.score;
            immunityScore = 0;
        }

        // TODO: add game info
        const gameInfo = {
            "playerProfileBio": profile.bio,
            "playerRecentPosts": recentPostsFormated,
            "infectionScore": infectionScore,
            "immunityScore": immunityScore,
            "infectedAccounts":infectedAccounts,
        }

        let state = await this.runtime.composeState(message, {
            twitterClient: this.client.twitterClient,
            twitterUserName: this.runtime.getSetting("TWITTER_USERNAME"),
            currentPost,
            formattedConversation,
            // "playerProfileBio": profile.bio,
            // "playerRecentPosts": recentPostsFormated,
            // "infectionScore": infectionScore,
            // "immunityScore": immunityScore,
            // "infectedAccounts":infectedAccounts,
            ...gameInfo,
        });

        elizaLogger.info("");
        elizaLogger.info("");
        elizaLogger.info("");
        elizaLogger.info("");

        elizaLogger.info("agent state with game info: ", state);

        elizaLogger.info("");
        elizaLogger.info("");
        elizaLogger.info("");
        elizaLogger.info("");
        elizaLogger.info("");
        // check if the tweet exists, save if it doesn't
        const tweetId = stringToUuid(tweet.id + "-" + this.runtime.agentId);
        const tweetExists =
            await this.runtime.messageManager.getMemoryById(tweetId);

        if (!tweetExists) {
            elizaLogger.log("tweet does not exist, saving");
            const userIdUUID = stringToUuid(tweet.userId as string);
            const roomId = stringToUuid(tweet.conversationId);

            const message = {
                id: tweetId,
                agentId: this.runtime.agentId,
                content: {
                    text: tweet.text,
                    url: tweet.permanentUrl,
                    inReplyTo: tweet.inReplyToStatusId
                        ? stringToUuid(
                              tweet.inReplyToStatusId +
                                  "-" +
                                  this.runtime.agentId
                          )
                        : undefined,
                },
                userId: userIdUUID,
                roomId,
                createdAt: tweet.timestamp * 1000,
            };
            this.client.saveRequestMessage(message, state);
        }

        // 1. Get the raw target users string from settings
        const targetUsersStr = this.runtime.getSetting("TWITTER_TARGET_USERS");
        elizaLogger.info("targetUsersStr: ", targetUsersStr);

        // 2. Process the string to get valid usernames
        const validTargetUsersStr =
            targetUsersStr && targetUsersStr.trim()
                ? targetUsersStr
                      .split(",") // Split by commas: "user1,user2" -> ["user1", "user2"]
                      .map((u) => u.trim()) // Remove whitespace: [" user1 ", "user2 "] -> ["user1", "user2"]
                      .filter((u) => u.length > 0)
                      .join(",")
                : "";

        elizaLogger.info("validTargetUsersStr: ", validTargetUsersStr);

        // TODO: uncomment for production
        // TODO: uncomment for production
        // TODO: uncomment for production
        // TODO: uncomment for production
        // const shouldRespondContext = composeContext({
        //     state,
        //     template:
        //         this.runtime.character.templates?.twitterShouldRespondTemplate?.(
        //             validTargetUsersStr
        //         ) ||
        //         this.runtime.character?.templates?.shouldRespondTemplate ||
        //         twitterShouldRespondTemplate(validTargetUsersStr),
        // });

        const shouldRespondContext = composeContext({
            state,
            template:
                twitterShouldRespondTemplate(validTargetUsersStr),
        });

        elizaLogger.info("shouldRespondContext: ", shouldRespondContext);

        let shouldRespond = await generateShouldRespond({
            runtime: this.runtime,
            context: shouldRespondContext,
            modelClass: this.runtime.modelClass,
        });

        elizaLogger.info("shouldRespond:", shouldRespond);

        shouldRespond = "RESPOND";
        elizaLogger.info("shouldRespond:", shouldRespond);

        // Promise<"RESPOND" | "IGNORE" | "STOP" | null> {
        if (shouldRespond !== "RESPOND") {
            elizaLogger.info("Not responding to message");
            return { text: "Response Decision:", action: shouldRespond };
        }


        // // TODO: rotate this context depending on whether we want to respond game tweet or regular tweet

        // Randomly choose between game context and regular context
        const useGameContext = Math.random() < 0.7;
        elizaLogger.info("Using game context:", useGameContext);

        const context = composeContext({
            state,
            template:
                this.runtime.character.templates
                    ?.twitterMessageHandlerTemplate ||
                this.runtime.character?.templates?.messageHandlerTemplate ||
                twitterMessageHandlerTemplate,
        });

        const gameContext = composeContext({
            state,
            template: infectionGameTemplate,
        });

        // TODO: enable for production
        const contextToUse = gameContext;
        // const contextToUse = useGameContext ? gameContext : context;


        elizaLogger.info("");
        elizaLogger.info("");
        elizaLogger.info("");
        elizaLogger.info("");

        elizaLogger.info("game context prompt: ", gameContext);

        elizaLogger.info("");
        elizaLogger.info("");
        elizaLogger.info("");
        elizaLogger.info("");
        elizaLogger.info("");

        const response = await generateMessageResponse({
            runtime: this.runtime,
            context: contextToUse,
            modelClass: this.runtime.modelClass,
        });

        elizaLogger.info("");
        elizaLogger.info("");
        elizaLogger.info("");
        elizaLogger.info("");

        elizaLogger.info("game prompt response: ", response);

        elizaLogger.info("");
        elizaLogger.info("");
        elizaLogger.info("");
        elizaLogger.info("");
        elizaLogger.info("");

        const removeQuotes = (str: string) =>
            str.replace(/^['"](.*)['"]$/, "$1");

        const stringId = stringToUuid(tweet.id + "-" + this.runtime.agentId);

        response.inReplyTo = stringId;

        response.text = removeQuotes(response.text);

        if (response.text) {
            try {
                const callback: HandlerCallback = async (response: Content) => {
                    const memories = await sendTweet(
                        this.client,
                        response,
                        message.roomId,
                        this.runtime.getSetting("TWITTER_USERNAME"),
                        tweet.id
                    );
                    return memories;
                };

                const responseMessages = await callback(response);

                state = (await this.runtime.updateRecentMessageState(
                    state
                )) as State;

                for (const responseMessage of responseMessages) {
                    if (
                        responseMessage ===
                        responseMessages[responseMessages.length - 1]
                    ) {
                        responseMessage.content.action = response.action;
                    } else {
                        responseMessage.content.action = "CONTINUE";
                    }
                    await this.runtime.messageManager.createMemory(
                        responseMessage
                    );
                }

                await this.runtime.processActions(
                    message,
                    responseMessages,
                    state,
                    callback
                );

                const responseInfo = `Context:\n\n${context}\n\nSelected Post: ${tweet.id} - ${tweet.username}: ${tweet.text}\nAgent's Output:\n${response.text}`;

                await this.runtime.cacheManager.set(
                    `twitter/tweet_generation_${tweet.id}.txt`,
                    responseInfo
                );
                await wait();
            } catch (error) {
                elizaLogger.error(`Error sending response tweet: ${error}`);
            }
        }
    }

    async buildConversationThread(
        tweet: Tweet,
        maxReplies: number = 10
    ): Promise<Tweet[]> {
        const thread: Tweet[] = [];
        const visited: Set<string> = new Set();

        async function processThread(currentTweet: Tweet, depth: number = 0) {
            elizaLogger.log("Processing tweet:", {
                id: currentTweet.id,
                inReplyToStatusId: currentTweet.inReplyToStatusId,
                depth: depth,
            });

            if (!currentTweet) {
                elizaLogger.log("No current tweet found for thread building");
                return;
            }

            if (depth >= maxReplies) {
                elizaLogger.log("Reached maximum reply depth", depth);
                return;
            }

            // Handle memory storage
            const memory = await this.runtime.messageManager.getMemoryById(
                stringToUuid(currentTweet.id + "-" + this.runtime.agentId)
            );
            if (!memory) {
                const roomId = stringToUuid(
                    currentTweet.conversationId + "-" + this.runtime.agentId
                );
                const userId = stringToUuid(currentTweet.userId);

                await this.runtime.ensureConnection(
                    userId,
                    roomId,
                    currentTweet.username,
                    currentTweet.name,
                    "twitter"
                );

                this.runtime.messageManager.createMemory({
                    id: stringToUuid(
                        currentTweet.id + "-" + this.runtime.agentId
                    ),
                    agentId: this.runtime.agentId,
                    content: {
                        text: currentTweet.text,
                        source: "twitter",
                        url: currentTweet.permanentUrl,
                        inReplyTo: currentTweet.inReplyToStatusId
                            ? stringToUuid(
                                  currentTweet.inReplyToStatusId +
                                      "-" +
                                      this.runtime.agentId
                              )
                            : undefined,
                    },
                    createdAt: currentTweet.timestamp * 1000,
                    roomId,
                    userId:
                        currentTweet.userId === this.twitterUserId
                            ? this.runtime.agentId
                            : stringToUuid(currentTweet.userId),
                    embedding: getEmbeddingZeroVector(),
                });
            }

            if (visited.has(currentTweet.id)) {
                elizaLogger.log("Already visited tweet:", currentTweet.id);
                return;
            }

            visited.add(currentTweet.id);
            thread.unshift(currentTweet);

            elizaLogger.debug("Current thread state:", {
                length: thread.length,
                currentDepth: depth,
                tweetId: currentTweet.id,
            });

            if (currentTweet.inReplyToStatusId) {
                elizaLogger.log(
                    "Fetching parent tweet:",
                    currentTweet.inReplyToStatusId
                );
                try {
                    const parentTweet = await this.twitterClient.getTweet(
                        currentTweet.inReplyToStatusId
                    );

                    if (parentTweet) {
                        elizaLogger.log("Found parent tweet:", {
                            id: parentTweet.id,
                            text: parentTweet.text?.slice(0, 50),
                        });
                        await processThread(parentTweet, depth + 1);
                    } else {
                        elizaLogger.log(
                            "No parent tweet found for:",
                            currentTweet.inReplyToStatusId
                        );
                    }
                } catch (error) {
                    elizaLogger.log("Error fetching parent tweet:", {
                        tweetId: currentTweet.inReplyToStatusId,
                        error,
                    });
                }
            } else {
                elizaLogger.log(
                    "Reached end of reply chain at:",
                    currentTweet.id
                );
            }
        }

        // Need to bind this context for the inner function
        await processThread.bind(this)(tweet, 0);

        elizaLogger.debug("Final thread built:", {
            totalTweets: thread.length,
            tweetIds: thread.map((t) => ({
                id: t.id,
                text: t.text?.slice(0, 50),
            })),
        });

        return thread;
    }

    private async fetchProfile(username: string) : Promise<{
        bio: string;
        recentPosts: {
            content: string;
            url: string;
        }[];
    }> {
        // TODO: fetch profile
        return {
            bio: "Web3 builder, trader, and investor",
            recentPosts: [
                {
                    content: "I build shit",
                    url: "https://twitter.com/hemic_",
                },
                {
                    content: "Bought a lot of PENGU tokens",
                    url: "https://twitter.com/hemic_",
                },
                {
                    content: "My PENGU is up 5x, thinking about securing some",
                    url: "https://twitter.com/hemic_",
                },
            ],
        };
    }

    private async fetchScore(username: string, limit?: number, mode?: "top" | "random") : Promise<{
        score: number;
        immunity: boolean;
        accsInfected: number;
    }> {
        // TODO: fetch game info
        return {
            score: 100,
            immunity: false,
            accsInfected: 100,
        };

        // const gameInfo = await this.runtime.fetchGameInfo();
        // return gameInfo;
    }

    private async fetchTotalInfected() : Promise<number>{
        // TODO: fetch total infected
        return 0;
    }
}



// description: fetches profile info

// http GET /profile/@username
// response:
// {
// "bio": "bio description",
// "recentPosts": [
// {
//  "content":"post content",
//  "url": "post url"
// },
// {
//  "content":"post content",
//  "url": "post url"
// }
// ]
// }


// http GET /score?username=username
// response:
// {
//  "score": 100,
//  "immunity": true, // if true, then score means 100 immunity, if false means virus score
//  "accsInfected": 100, // number of infected accs
// }

// description: fetches random players with limit
// http GET /score?mode=random?limit=20
// response:
// [
// {
//  "username": "@hemic_",
//  "score": 100, // number of infected accs
//  "immunity": true, // if true, then score means 100 immunity, if false means virus score
// },
// {
//  "username": "@0xCooker",
//  "score": 1000, // number of infected accs
//  "immunity": true, // if true, then score means 100 immunity, if false means virus score
// }
// ]

// description: fetches top players with limit
// http GET /score?mode=top?limit=20
// response:
// [
// {
//  "username": "@hemic_",
//  "score": 100, // number of infected accs
//  "immunity": true, // if true, then score means 100 immunity, if false means virus score
// },
// {
//  "username": "@0xCooker",
//  "score": 1000, // number of infected accs
//  "immunity": true, // if true, then score means 100 immunity, if false means virus score
// }
// ]

// description: fetches total infected players
// http GET /total-infected
// response:
// {
//  "totalInfected": 123,
// }
