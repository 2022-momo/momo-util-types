import { expectType } from 'tsd';
import {
  PartialRequired,
  PartialOptional,
  Override,
  Equal,
  If,
  Unionize,
  ObjectKey,
  ObjectValue,
  ObjectType,
  ArrayElement,
} from '../src/@types/utils';

describe('utils에 대한 테스트를 진행한다.', () => {
  it('PartialRequired 테스트', () => {
    // given
    type Obj = Partial<{ a: 1; b: 2; c: 3; d: 4; e: 5 }>;
    type ResultType = { a: 1; b: 2; c: 3; d?: 4; e?: 5 };

    // when
    const result: ResultType = { a: 1, b: 2, c: 3 };

    // then
    expectType<PartialRequired<Obj, 'a' | 'b' | 'c'>>(result);
  });

  it('PartialOptional 테스트', () => {
    // given
    type Obj = Partial<{ a: 1; b: 2; c: 3; d: 4; e: 5 }>;
    type ResultType = { a: 1; b: 2; c: 3; d?: 4; e?: 5 };

    // when
    const result: ResultType = { a: 1, b: 2, c: 3 };

    // then
    expectType<PartialOptional<Obj, 'd' | 'e'>>(result);
  });

  it('Override 테스트', () => {
    // given
    type Obj1 = { a: 1; b: 2; c: 3; d: 4; e: 5 };
    type Obj2 = { a: 6; b: 7; c: 8 };
    type ResultType = { a: 6; b: 7; c: 8; d: 4; e: 5 };

    // when
    const result: ResultType = { a: 6, b: 7, c: 8, d: 4, e: 5 };

    // then
    expectType<Override<Obj1, Obj2>>(result);
  });

  it('Equal 테스트', () => {
    // given
    type Obj1 = { a: 1; b: 2; c: 3 };
    type Obj2 = { a: 6; b: 7; c: 8 };
    type Obj3 = { a: 1; b: 2; c: 3 };

    // when & then
    expectType<Equal<Obj1, Obj2>>(false);
    expectType<Equal<Obj1, Obj3>>(true);
  });

  it('If 테스트', () => {
    // given & when & then
    expectType<Equal<If<true, 'Usage', 'Halee'>, 'Usage'>>(true);
  });

  it('Unionize 테스트', () => {
    // given
    type Obj = { a: 1; b: 2; c: 3 };
    type ResultType = { a: 1 } | { b: 2 } | { c: 3 };

    // when
    const result: ResultType = { a: 1 };

    // then
    expectType<Unionize<Obj>>(result);
  });

  it('ObjectKey 테스트', () => {
    // given
    type Obj = { a: 1; b: '2'; c: null; d: undefined; e: Symbol };
    type ResultType = 'a' | 'b' | 'c' | 'd' | 'e';

    // when
    const result: ResultType = 'a';

    // then
    expectType<ObjectKey<Obj>>(result);
  });

  it('ObjectValue 테스트', () => {
    // given
    type Obj = { a: 1; b: '2'; c: null; d: undefined; e: Symbol };
    type ResultType = 1 | '2' | null | undefined | Symbol;

    // when
    const result: ResultType = 1;

    // then
    expectType<ObjectValue<Obj>>(result);
  });

  it('ObjectType 테스트', () => {
    // given & when
    const result = { a: '6', b: '7', c: '8', d: '4', e: '5' };

    // then
    expectType<ObjectType<string>>(result);
  });

  it('ArrayElement 테스트', () => {
    // given
    type Arr = [1, 2, 3, 4, 5];

    // when
    const result = 1;

    // then
    expectType<ArrayElement<Arr>>(result);
  });
});
