[@ai16z/eliza v0.1.5-alpha.5](../index.md) / ITextGenerationService

# Interface: ITextGenerationService

## Extends

- [`Service`](../classes/Service.md)

## Accessors

### serviceType

#### Get Signature

> **get** **serviceType**(): [`ServiceType`](../enumerations/ServiceType.md)

##### Returns

[`ServiceType`](../enumerations/ServiceType.md)

#### Inherited from

[`Service`](../classes/Service.md).[`serviceType`](../classes/Service.md#serviceType-1)

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:1009](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1009)
=======
[packages/core/src/types.ts:972](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L972)
>>>>>>> 6814986b (configurable model class)

## Methods

### initialize()

> `abstract` **initialize**(`runtime`): `Promise`\<`void`\>

Add abstract initialize method that must be implemented by derived classes

#### Parameters

• **runtime**: [`IAgentRuntime`](IAgentRuntime.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Service`](../classes/Service.md).[`initialize`](../classes/Service.md#initialize)

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:1014](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1014)
=======
[packages/core/src/types.ts:977](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L977)
>>>>>>> 6814986b (configurable model class)

***

### initializeModel()

> **initializeModel**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:1129](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1129)
=======
[packages/core/src/types.ts:1087](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1087)
>>>>>>> 6814986b (configurable model class)

***

### queueMessageCompletion()

> **queueMessageCompletion**(`context`, `temperature`, `stop`, `frequency_penalty`, `presence_penalty`, `max_tokens`): `Promise`\<`any`\>

#### Parameters

• **context**: `string`

• **temperature**: `number`

• **stop**: `string`[]

• **frequency\_penalty**: `number`

• **presence\_penalty**: `number`

• **max\_tokens**: `number`

#### Returns

`Promise`\<`any`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:1130](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1130)
=======
[packages/core/src/types.ts:1088](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1088)
>>>>>>> 6814986b (configurable model class)

***

### queueTextCompletion()

> **queueTextCompletion**(`context`, `temperature`, `stop`, `frequency_penalty`, `presence_penalty`, `max_tokens`): `Promise`\<`string`\>

#### Parameters

• **context**: `string`

• **temperature**: `number`

• **stop**: `string`[]

• **frequency\_penalty**: `number`

• **presence\_penalty**: `number`

• **max\_tokens**: `number`

#### Returns

`Promise`\<`string`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:1138](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1138)
=======
[packages/core/src/types.ts:1096](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1096)
>>>>>>> 6814986b (configurable model class)

***

### getEmbeddingResponse()

> **getEmbeddingResponse**(`input`): `Promise`\<`number`[]\>

#### Parameters

• **input**: `string`

#### Returns

`Promise`\<`number`[]\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:1146](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1146)
=======
[packages/core/src/types.ts:1104](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1104)
>>>>>>> 6814986b (configurable model class)
