import { Product } from './Product';

export interface CartItem extends Product {
  cartAmount: number;
}
