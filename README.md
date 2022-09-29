# momo-util-types

[![npm](https://img.shields.io/npm/v/momo-util-types.svg?style=flat&logo=npm)](https://www.npmjs.com/package/momo-util-types)
[![npm downloads](https://img.shields.io/npm/dm/momo-util-types.svg?style=flat)](https://npm-stat.com/charts.html?package=momo-util-types)
[![install size](https://packagephobia.now.sh/badge?p=momo-util-types)](https://packagephobia.now.sh/result?p=momo-util-types)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/momo-util-types)

⭐️ 모두모여라의 유틸 타입 라이브러리입니다 ⭐️

## Quick Start

```bash
$ npm install -D momo-util-types

// or yarn
$ yarn add -D momo-util-types
```

## API

### PartialRequired<Type, Keys>

`Keys` 에서 `Required`로 변경할 속성 집합을 선택하여 타입을 구성합니다.

```typescript
type PartialObject = Partial<{ a: 1; b: 2; c: 3 }>;
// { a?: 1, b?: 2, c?: 3 }

type RequiredObject = PartialRequired<PartialObject, "a" | "b" | "c">;
// result : { a: 1, b: 2, c: 3 }
```

### PartialOptional<Type, Keys>

`Keys` 에서 `Optional`로 변경할 속성 집합을 선택하여 타입을 구성합니다.

```typescript
type RequiredObject = { a: 1; b: 2; c: 3 };

type OptinalObject = PartialOptional<RequiredObject, "a" | "b">;
// result : { a?: 1, b?: 2, c: 3 }
```

### Override<Type, Keys>

`Keys` 에서 속성 집합을 선택하여 기존 타입에 오버라이딩한 새 타입을 구성합니다.

```typescript
type OriginalObject = { a: 1; b: 2 };
type TargetObject = { a: 3 };

type OverridedObject = Override<OriginalObject, TargetObject>;
// result : { a: 3, b: 2 }
```

### Equal<Type1, Type2>

두 타입의 구성을 비교합니다.

같으면 `true`, 다르면 `false`를 타입을 반환합니다.

```typescript
type TypeA = { a: 1 };
type TypeB = { a: 1 };
type TypeC = { a: 2 };

type MayBeTrue = Equal<TypeA, TypeB>;
// result : true

type MayBeFalse = Equal<TypeA, TypeC>;
// result : false
```

### If<ConditionType, ReturnTypeA, ReturnTypeB>

`ConditionType`에 따라 다른 타입을 반환합니다.

`true`일 경우 앞의 타입을, `false`일 경우 뒤의 타입을 반환합니다.

`ConditionType`은 `true` | `false` 이어야 합니다.

```typescript
type LiteralType = If<true, "LiteralTypeA", "LiteralTypeB">;
// result : "LiteralTypeA"
```

### Unionize<Type>

객체 타입의 각 요소를 `Union` 으로 결합시킨 타입을 구성합니다.

```typescript
type TargetObject = { a: 1; b: 2; c: 3 };

type UnionizedType = Unionize<TargetObject>;
// result : { a: 1 } | { b: 2 } | { c: 3 };
```

### ObjectKey<Type>>

객체 타입의 `Key` 를 `Union` 으로 결합시킨 타입을 구성합니다.

```typescript
type TargetObject = { a: 1; b: 2; c: 3 };

type KeyType = ObjectKey<TargetObject>;
// result : "a" | "b" | "c";
```

### ObjectValue<Type>

객체 타입의 `Value` 를 `Union` 으로 결합시킨 타입을 구성합니다.

```typescript
type TargetObject = { a: 1; b: 2; c: 3 };

type ValueType = ObjectKey<TargetObject>;
// result : 1 | 2 | 3
```

### ObjectType<T, Keys?>

객체의 `Key`와 `Value`의 타입을 지정한 새로운 객체 타입을 구성합니다.

`Key` 타입의 기본값은 `string`이며, `string | number | symbol` 의 하위 타입만 입력할 수 있습니다.

```typescript
type NewObjectTypeWithStringValue = ObjectKey<string>;
// result : Record<string, string>

type NewObjectTypeWithNumberKey = ObjectKey<string, number>;
// result : Record<number, string>
```

### ArrayElement<Type>

대상 배열 타입의 요소들로 구성된 새로운 타입을 구성합니다.

```typescript
const array = ["a", 1, Symbol("b")];
type NewObjectTypeWithStringValue = ArrayElement<typeof array>;
// result : string | number | symbol
```
