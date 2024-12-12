[@ai16z/eliza v0.1.5-alpha.5](../index.md) / IMemoryManager

# Interface: IMemoryManager

## Properties

### runtime

> **runtime**: [`IAgentRuntime`](IAgentRuntime.md)

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:946](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L946)
=======
[packages/core/src/types.ts:909](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L909)
>>>>>>> 6814986b (configurable model class)

***

### tableName

> **tableName**: `string`

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:947](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L947)
=======
[packages/core/src/types.ts:910](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L910)
>>>>>>> 6814986b (configurable model class)

***

### constructor

> **constructor**: `Function`

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:948](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L948)
=======
[packages/core/src/types.ts:911](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L911)
>>>>>>> 6814986b (configurable model class)

## Methods

### addEmbeddingToMemory()

> **addEmbeddingToMemory**(`memory`): `Promise`\<[`Memory`](Memory.md)\>

#### Parameters

• **memory**: [`Memory`](Memory.md)

#### Returns

`Promise`\<[`Memory`](Memory.md)\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:950](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L950)
=======
[packages/core/src/types.ts:913](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L913)
>>>>>>> 6814986b (configurable model class)

***

### getMemories()

> **getMemories**(`opts`): `Promise`\<[`Memory`](Memory.md)[]\>

#### Parameters

• **opts**

• **opts.roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **opts.count?**: `number`

• **opts.unique?**: `boolean`

• **opts.start?**: `number`

• **opts.end?**: `number`

#### Returns

`Promise`\<[`Memory`](Memory.md)[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:952](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L952)
=======
[packages/core/src/types.ts:915](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L915)
>>>>>>> 6814986b (configurable model class)

***

### getCachedEmbeddings()

> **getCachedEmbeddings**(`content`): `Promise`\<`object`[]\>

#### Parameters

• **content**: `string`

#### Returns

`Promise`\<`object`[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:960](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L960)
=======
[packages/core/src/types.ts:923](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L923)
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
[packages/core/src/types.ts:964](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L964)
=======
[packages/core/src/types.ts:927](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L927)
>>>>>>> 6814986b (configurable model class)

***

### getMemoriesByRoomIds()

> **getMemoriesByRoomIds**(`params`): `Promise`\<[`Memory`](Memory.md)[]\>

#### Parameters

• **params**

• **params.roomIds**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`[]

#### Returns

`Promise`\<[`Memory`](Memory.md)[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:965](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L965)
=======
[packages/core/src/types.ts:928](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L928)
>>>>>>> 6814986b (configurable model class)

***

### searchMemoriesByEmbedding()

> **searchMemoriesByEmbedding**(`embedding`, `opts`): `Promise`\<[`Memory`](Memory.md)[]\>

#### Parameters

• **embedding**: `number`[]

• **opts**

• **opts.match\_threshold?**: `number`

• **opts.count?**: `number`

• **opts.roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **opts.unique?**: `boolean`

#### Returns

`Promise`\<[`Memory`](Memory.md)[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:966](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L966)
=======
[packages/core/src/types.ts:929](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L929)
>>>>>>> 6814986b (configurable model class)

***

### createMemory()

> **createMemory**(`memory`, `unique`?): `Promise`\<`void`\>

#### Parameters

• **memory**: [`Memory`](Memory.md)

• **unique?**: `boolean`

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:976](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L976)
=======
[packages/core/src/types.ts:939](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L939)
>>>>>>> 6814986b (configurable model class)

***

### removeMemory()

> **removeMemory**(`memoryId`): `Promise`\<`void`\>

#### Parameters

• **memoryId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:978](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L978)
=======
[packages/core/src/types.ts:941](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L941)
>>>>>>> 6814986b (configurable model class)

***

### removeAllMemories()

> **removeAllMemories**(`roomId`): `Promise`\<`void`\>

#### Parameters

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:980](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L980)
=======
[packages/core/src/types.ts:943](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L943)
>>>>>>> 6814986b (configurable model class)

***

### countMemories()

> **countMemories**(`roomId`, `unique`?): `Promise`\<`number`\>

#### Parameters

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **unique?**: `boolean`

#### Returns

`Promise`\<`number`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:982](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L982)
=======
[packages/core/src/types.ts:945](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L945)
>>>>>>> 6814986b (configurable model class)
