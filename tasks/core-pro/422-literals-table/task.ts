
import type { Entities } from './table-models.ts';

type Get<Model extends { tableName: Entities }> = {
  [Prop in `get${Capitalize<Model['tableName']>}`]: (id: number) => Model;
};

type Update<Model extends { tableName: Entities }> = {
  [Prop in `update${Capitalize<Model['tableName']>}`]: (id: number, update: Partial<Model>) => Model
};

type Delete<Model extends { tableName: Entities }> = {
  [Prop in `delete${Capitalize<Model['tableName']>}`]: (id: number) => Model
};

export type Table<Model extends { tableName: Entities }> =
  Get<Model> &
  Update<Model> &
  Delete<Model>;
