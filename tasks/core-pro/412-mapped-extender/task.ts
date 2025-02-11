type Person = {
  firstName: string;
  lastName: string;
};



type FieldExtender<T, K> = {
  [P in keyof T]: {
    value: T[P];

  } & K;
};

type PersonUpdateHistory = FieldExtender<
  Person,
  {
    isUpdated: boolean;
    updatedAt: number | null;
    qwe: string;
  }
>;

export const history: PersonUpdateHistory = {
  firstName: {
    value: 'John',
    isUpdated: false,
    updatedAt: null,
    qwe: 'qwe',
  },
  lastName: {
    value: 'Doe',
    isUpdated: true,
    updatedAt: new Date().getTime(),
    qwe: 'qwe',
  },
};
