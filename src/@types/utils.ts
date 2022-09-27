export type PartialRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;
export type PartialOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

export type Override<T1, T2> = Omit<T1, keyof T2> & T2;

export type Equal<T1, T2> = (<T>() => T extends T1 ? 1 : 2) extends <
  T,
>() => T extends T2 ? 1 : 2
  ? true
  : false;

export type If<C extends boolean, T, F = never> = C extends true
  ? T
  : F extends never
  ? T
  : F;

export type Unionize<T extends object> = {
  [P in keyof T]: { [Q in P]: T[P] };
}[keyof T];

export type ObjectKey<T extends object> = keyof T;
export type ObjectValue<T extends object> = T[keyof T];
export type ObjectType<T, K extends string | number | symbol = string> = Record<
  K,
  T
>;

export type ArrayElement<T> = T extends (infer E)[] ? E : never;
