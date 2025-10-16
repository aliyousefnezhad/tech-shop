import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mockProducts: Product[] = [
    {
      id: 1,
      name: 'MacBook Pro 14 M2',
      brand: 'Apple',
      category: 'laptop',
      price: 82000000,
      image: 'assets/images/laptop1.jpg',
      description: 'لپتاپ حرفه ای اپل با تراشه M2',
      specs: { CPU: 'Apple M2', RAM: '16GB' },
      inStock: true,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      brand: 'Samsung',
      category: 'phone',
      price: 65000000,
      image: 'assets/images/phone1.jpg',
      description: 'گوشي هوشمند سامسونگ',
      specs: { Display: '6.8" AMOLED', RAM: '12GB' },
      inStock: true,
      rating: 4.9
    },
    {
      id: 3,
      name: 'Sony WH-1000XM5',
      brand: 'Sony',
      category: 'headphone',
      price: 7500000,
      image: 'assets/images/headphone1.jpg',
      description: 'هدفون بي سيم نویزکنسلینگ',
      specs: { Battery: '30 Hours' },
      inStock: true,
      rating: 4.7
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.mockProducts);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.mockProducts.find(p => p.id === id));
  }
}