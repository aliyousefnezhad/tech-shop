// src/app/core/models/product.ts

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: 'laptop' | 'phone' | 'headphone';
  price: number;
  discount?: number;
  image: string;
  description: string;
  specs: { [key: string]: string };
  inStock: boolean;
  rating: number;
}