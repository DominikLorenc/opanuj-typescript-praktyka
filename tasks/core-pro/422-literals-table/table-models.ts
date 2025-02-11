

export type Entities = 'user' | 'product' | 'order';

export interface User {
  tableName: Entities;
  id: number;
  name: string;
  email: string;
}

export interface Product {
  tableName: Entities;
  id: number;
  name: string;
  price: number;
}

export interface Order {
  tableName: Entities;
  id: number;
  productId: number;
  quantity: number;
}
