import { FieldTypeCleaner } from './task.ts';

type Phone = {
  brand: string;
  model: string;
  price: number;
};

type JustPhonePrice = FieldTypeCleaner<Phone, string>;
const phone1: JustPhonePrice = {
  price: 999,

};

type Person = {
  name: string;
  age: number;
  isActive: boolean;
};

type JustPersonName = FieldTypeCleaner<Person, number | boolean>;
const person1: JustPersonName = {
  name: 'John',
};

// //------------------------------------------------------------------------------

// type FreezeProps<Type, Keys extends keyof Type> = 
//    { readonly [Prop in Keys as Prop extends Keys ? Prop : never]: Type[Prop]; } &
//    {          [Prop in Exclude<keyof Type, Keys>]: Type[Prop]; };

// const qwe: FreezeProps<Person, "isActive"> = {
//   name: 'John',
//   age: 30,
//   isActive: true,
// };

// qwe.age = 10;
// qwe.isActive = false;

// //------------------------------------------------------------------------------

// interface Animal {
//   name: string;
// }