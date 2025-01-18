import type { Product } from './Product';

export interface User {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  cartItems: Product[]; // cartItems is an array of Product[]
}