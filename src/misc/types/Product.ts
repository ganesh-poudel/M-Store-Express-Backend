import { Category } from './Category';
import { Size } from './Size';
import { Variant } from './Variant';

export type Product = {
  id: string;
  name: string;
  description: string;
  categories: Category[]; // Or number[] as category ids
  variants: Variant[];
  sizes: Size[];
};