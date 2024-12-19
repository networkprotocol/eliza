[@ai16z/eliza v0.1.5-alpha.5](../index.md) / IBrowserService

# Interface: IBrowserService

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

### closeBrowser()

> **closeBrowser**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:1150](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1150)
=======
[packages/core/src/types.ts:1108](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1108)
>>>>>>> 6814986b (configurable model class)

***

### getPageContent()

> **getPageContent**(`url`, `runtime`): `Promise`\<`object`\>

#### Parameters

• **url**: `string`

• **runtime**: [`IAgentRuntime`](IAgentRuntime.md)

#### Returns

`Promise`\<`object`\>

##### title

> **title**: `string`

##### description

> **description**: `string`

##### bodyContent

> **bodyContent**: `string`

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:1151](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1151)
=======
[packages/core/src/types.ts:1109](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1109)
>>>>>>> 6814986b (configurable model class)
