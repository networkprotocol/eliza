[@ai16z/eliza v0.1.5-alpha.5](../index.md) / IPdfService

# Interface: IPdfService

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

### getInstance()

> **getInstance**(): [`IPdfService`](IPdfService.md)

#### Returns

[`IPdfService`](IPdfService.md)

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:1163](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1163)
=======
[packages/core/src/types.ts:1121](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1121)
>>>>>>> 6814986b (configurable model class)

***

### convertPdfToText()

> **convertPdfToText**(`pdfBuffer`): `Promise`\<`string`\>

#### Parameters

• **pdfBuffer**: `Buffer`

#### Returns

`Promise`\<`string`\>

#### Defined in

<<<<<<< HEAD
[packages/core/src/types.ts:1164](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1164)
=======
[packages/core/src/types.ts:1122](https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L1122)
>>>>>>> 6814986b (configurable model class)
