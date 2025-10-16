import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  private storageKey = 'cart_items';

  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {
    this.loadCartFromStorage();
  }

  private loadCartFromStorage() {
    const saved = localStorage.getItem(this.storageKey);
    this.cartItems = saved ? JSON.parse(saved) : [];
    this.cartItemsSubject.next(this.cartItems);
  }

  private saveCartToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
  }

  addToCart(product: Product) {
    this.cartItems.push(product);
    this.cartItemsSubject.next(this.cartItems);
    this.saveCartToStorage();
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.cartItemsSubject.next(this.cartItems);
    this.saveCartToStorage();
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  clearCart() {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
    this.saveCartToStorage();
  }
}