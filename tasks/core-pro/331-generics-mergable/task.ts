// Zaimplementuj typ MergeableObject z wykorzystaniem typów wbudowanych - Exclude i NonNullable.

type UnionOfTypes = string | number | boolean | symbol | unknown[] | Function;

type MergeableObject<T> = T extends object ? Exclude<T, UnionOfTypes> : never;


export function mergeObjects<T, U>(obj1: MergeableObject<T>, obj2: MergeableObject<U>): T & U {
  const merged = { ...obj1, ...obj2 };
  console.log(merged);
  return merged;
}

