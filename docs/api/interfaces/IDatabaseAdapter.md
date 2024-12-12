[@ai16z/eliza v0.1.5-alpha.5](../index.md) / IDatabaseAdapter

# Interface: IDatabaseAdapter

Interface for database operations

## Properties

### db

> **db**: `any`

Database instance

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:781](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L781)
=======
[packages/core/src/types.ts:744](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L744)
>>>>>>> 6814986b (configurable model class)

## Methods

### init()

> **init**(): `Promise`\<`void`\>

Optional initialization

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:784](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L784)
=======
[packages/core/src/types.ts:747](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L747)
>>>>>>> 6814986b (configurable model class)

***

### close()

> **close**(): `Promise`\<`void`\>

Close database connection

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:787](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L787)
=======
[packages/core/src/types.ts:750](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L750)
>>>>>>> 6814986b (configurable model class)

***

### getAccountById()

> **getAccountById**(`userId`): `Promise`\<[`Account`](Account.md)\>

Get account by ID

#### Parameters

• **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<[`Account`](Account.md)\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:790](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L790)
=======
[packages/core/src/types.ts:753](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L753)
>>>>>>> 6814986b (configurable model class)

***

### createAccount()

> **createAccount**(`account`): `Promise`\<`boolean`\>

Create new account

#### Parameters

• **account**: [`Account`](Account.md)

#### Returns

`Promise`\<`boolean`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:793](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L793)
=======
[packages/core/src/types.ts:756](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L756)
>>>>>>> 6814986b (configurable model class)

***

### getMemories()

> **getMemories**(`params`): `Promise`\<[`Memory`](Memory.md)[]\>

Get memories matching criteria

#### Parameters

• **params**

• **params.roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **params.count?**: `number`

• **params.unique?**: `boolean`

• **params.tableName**: `string`

• **params.agentId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **params.start?**: `number`

• **params.end?**: `number`

#### Returns

`Promise`\<[`Memory`](Memory.md)[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:796](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L796)
=======
[packages/core/src/types.ts:759](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L759)
>>>>>>> 6814986b (configurable model class)

***

### getMemoryById()

> **getMemoryById**(`id`): `Promise`\<[`Memory`](Memory.md)\>

#### Parameters

• **id**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<[`Memory`](Memory.md)\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:806](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L806)
=======
[packages/core/src/types.ts:769](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L769)
>>>>>>> 6814986b (configurable model class)

***

### getMemoriesByRoomIds()

> **getMemoriesByRoomIds**(`params`): `Promise`\<[`Memory`](Memory.md)[]\>

#### Parameters

• **params**

• **params.tableName**: `string`

• **params.agentId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **params.roomIds**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`[]

#### Returns

`Promise`\<[`Memory`](Memory.md)[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:808](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L808)
=======
[packages/core/src/types.ts:771](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L771)
>>>>>>> 6814986b (configurable model class)

***

### getCachedEmbeddings()

> **getCachedEmbeddings**(`params`): `Promise`\<`object`[]\>

#### Parameters

• **params**

• **params.query\_table\_name**: `string`

• **params.query\_threshold**: `number`

• **params.query\_input**: `string`

• **params.query\_field\_name**: `string`

• **params.query\_field\_sub\_name**: `string`

• **params.query\_match\_count**: `number`

#### Returns

`Promise`\<`object`[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:814](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L814)
=======
[packages/core/src/types.ts:777](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L777)
>>>>>>> 6814986b (configurable model class)

***

### log()

> **log**(`params`): `Promise`\<`void`\>

#### Parameters

• **params**

• **params.body**

• **params.userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **params.roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **params.type**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:823](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L823)
=======
[packages/core/src/types.ts:786](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L786)
>>>>>>> 6814986b (configurable model class)

***

### getActorDetails()

> **getActorDetails**(`params`): `Promise`\<[`Actor`](Actor.md)[]\>

#### Parameters

• **params**

• **params.roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<[`Actor`](Actor.md)[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:830](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L830)
=======
[packages/core/src/types.ts:793](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L793)
>>>>>>> 6814986b (configurable model class)

***

### searchMemories()

> **searchMemories**(`params`): `Promise`\<[`Memory`](Memory.md)[]\>

#### Parameters

• **params**

• **params.tableName**: `string`

• **params.agentId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **params.roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **params.embedding**: `number`[]

• **params.match\_threshold**: `number`

• **params.match\_count**: `number`

• **params.unique**: `boolean`

#### Returns

`Promise`\<[`Memory`](Memory.md)[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:832](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L832)
=======
[packages/core/src/types.ts:795](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L795)
>>>>>>> 6814986b (configurable model class)

***

### updateGoalStatus()

> **updateGoalStatus**(`params`): `Promise`\<`void`\>

#### Parameters

• **params**

• **params.goalId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **params.status**: [`GoalStatus`](../enumerations/GoalStatus.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:842](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L842)
=======
[packages/core/src/types.ts:805](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L805)
>>>>>>> 6814986b (configurable model class)

***

### searchMemoriesByEmbedding()

> **searchMemoriesByEmbedding**(`embedding`, `params`): `Promise`\<[`Memory`](Memory.md)[]\>

#### Parameters

• **embedding**: `number`[]

• **params**

• **params.match\_threshold?**: `number`

• **params.count?**: `number`

• **params.roomId?**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **params.agentId?**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **params.unique?**: `boolean`

• **params.tableName**: `string`

#### Returns

`Promise`\<[`Memory`](Memory.md)[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:847](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L847)
=======
[packages/core/src/types.ts:810](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L810)
>>>>>>> 6814986b (configurable model class)

***

### createMemory()

> **createMemory**(`memory`, `tableName`, `unique`?): `Promise`\<`void`\>

#### Parameters

• **memory**: [`Memory`](Memory.md)

• **tableName**: `string`

• **unique?**: `boolean`

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:859](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L859)
=======
[packages/core/src/types.ts:822](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L822)
>>>>>>> 6814986b (configurable model class)

***

### removeMemory()

> **removeMemory**(`memoryId`, `tableName`): `Promise`\<`void`\>

#### Parameters

• **memoryId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **tableName**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:865](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L865)
=======
[packages/core/src/types.ts:828](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L828)
>>>>>>> 6814986b (configurable model class)

***

### removeAllMemories()

> **removeAllMemories**(`roomId`, `tableName`): `Promise`\<`void`\>

#### Parameters

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **tableName**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:867](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L867)
=======
[packages/core/src/types.ts:830](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L830)
>>>>>>> 6814986b (configurable model class)

***

### countMemories()

> **countMemories**(`roomId`, `unique`?, `tableName`?): `Promise`\<`number`\>

#### Parameters

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **unique?**: `boolean`

• **tableName?**: `string`

#### Returns

`Promise`\<`number`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:869](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L869)
=======
[packages/core/src/types.ts:832](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L832)
>>>>>>> 6814986b (configurable model class)

***

### getGoals()

> **getGoals**(`params`): `Promise`\<[`Goal`](Goal.md)[]\>

#### Parameters

• **params**

• **params.agentId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **params.roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **params.userId?**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **params.onlyInProgress?**: `boolean`

• **params.count?**: `number`

#### Returns

`Promise`\<[`Goal`](Goal.md)[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:875](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L875)
=======
[packages/core/src/types.ts:838](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L838)
>>>>>>> 6814986b (configurable model class)

***

### updateGoal()

> **updateGoal**(`goal`): `Promise`\<`void`\>

#### Parameters

• **goal**: [`Goal`](Goal.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:883](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L883)
=======
[packages/core/src/types.ts:846](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L846)
>>>>>>> 6814986b (configurable model class)

***

### createGoal()

> **createGoal**(`goal`): `Promise`\<`void`\>

#### Parameters

• **goal**: [`Goal`](Goal.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:885](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L885)
=======
[packages/core/src/types.ts:848](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L848)
>>>>>>> 6814986b (configurable model class)

***

### removeGoal()

> **removeGoal**(`goalId`): `Promise`\<`void`\>

#### Parameters

• **goalId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:887](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L887)
=======
[packages/core/src/types.ts:850](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L850)
>>>>>>> 6814986b (configurable model class)

***

### removeAllGoals()

> **removeAllGoals**(`roomId`): `Promise`\<`void`\>

#### Parameters

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:889](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L889)
=======
[packages/core/src/types.ts:852](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L852)
>>>>>>> 6814986b (configurable model class)

***

### getRoom()

> **getRoom**(`roomId`): `Promise`\<\`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`\>

#### Parameters

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<\`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:891](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L891)
=======
[packages/core/src/types.ts:854](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L854)
>>>>>>> 6814986b (configurable model class)

***

### createRoom()

> **createRoom**(`roomId`?): `Promise`\<\`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`\>

#### Parameters

• **roomId?**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<\`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:893](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L893)
=======
[packages/core/src/types.ts:856](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L856)
>>>>>>> 6814986b (configurable model class)

***

### removeRoom()

> **removeRoom**(`roomId`): `Promise`\<`void`\>

#### Parameters

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:895](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L895)
=======
[packages/core/src/types.ts:858](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L858)
>>>>>>> 6814986b (configurable model class)

***

### getRoomsForParticipant()

> **getRoomsForParticipant**(`userId`): `Promise`\<\`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`[]\>

#### Parameters

• **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<\`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:897](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L897)
=======
[packages/core/src/types.ts:860](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L860)
>>>>>>> 6814986b (configurable model class)

***

### getRoomsForParticipants()

> **getRoomsForParticipants**(`userIds`): `Promise`\<\`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`[]\>

#### Parameters

• **userIds**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`[]

#### Returns

`Promise`\<\`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:899](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L899)
=======
[packages/core/src/types.ts:862](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L862)
>>>>>>> 6814986b (configurable model class)

***

### addParticipant()

> **addParticipant**(`userId`, `roomId`): `Promise`\<`boolean`\>

#### Parameters

• **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<`boolean`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:901](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L901)
=======
[packages/core/src/types.ts:864](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L864)
>>>>>>> 6814986b (configurable model class)

***

### removeParticipant()

> **removeParticipant**(`userId`, `roomId`): `Promise`\<`boolean`\>

#### Parameters

• **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<`boolean`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:903](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L903)
=======
[packages/core/src/types.ts:866](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L866)
>>>>>>> 6814986b (configurable model class)

***

### getParticipantsForAccount()

> **getParticipantsForAccount**(`userId`): `Promise`\<[`Participant`](Participant.md)[]\>

#### Parameters

• **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<[`Participant`](Participant.md)[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:905](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L905)
=======
[packages/core/src/types.ts:868](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L868)
>>>>>>> 6814986b (configurable model class)

***

### getParticipantsForRoom()

> **getParticipantsForRoom**(`roomId`): `Promise`\<\`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`[]\>

#### Parameters

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<\`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:907](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L907)
=======
[packages/core/src/types.ts:870](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L870)
>>>>>>> 6814986b (configurable model class)

***

### getParticipantUserState()

> **getParticipantUserState**(`roomId`, `userId`): `Promise`\<`"FOLLOWED"` \| `"MUTED"`\>

#### Parameters

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<`"FOLLOWED"` \| `"MUTED"`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:909](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L909)
=======
[packages/core/src/types.ts:872](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L872)
>>>>>>> 6814986b (configurable model class)

***

### setParticipantUserState()

> **setParticipantUserState**(`roomId`, `userId`, `state`): `Promise`\<`void`\>

#### Parameters

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **state**: `"FOLLOWED"` \| `"MUTED"`

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:914](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L914)
=======
[packages/core/src/types.ts:877](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L877)
>>>>>>> 6814986b (configurable model class)

***

### createRelationship()

> **createRelationship**(`params`): `Promise`\<`boolean`\>

#### Parameters

• **params**

• **params.userA**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **params.userB**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<`boolean`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:920](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L920)
=======
[packages/core/src/types.ts:883](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L883)
>>>>>>> 6814986b (configurable model class)

***

### getRelationship()

> **getRelationship**(`params`): `Promise`\<[`Relationship`](Relationship.md)\>

#### Parameters

• **params**

• **params.userA**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **params.userB**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<[`Relationship`](Relationship.md)\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:922](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L922)
=======
[packages/core/src/types.ts:885](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L885)
>>>>>>> 6814986b (configurable model class)

***

### getRelationships()

> **getRelationships**(`params`): `Promise`\<[`Relationship`](Relationship.md)[]\>

#### Parameters

• **params**

• **params.userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<[`Relationship`](Relationship.md)[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:927](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L927)
=======
[packages/core/src/types.ts:890](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L890)
>>>>>>> 6814986b (configurable model class)
