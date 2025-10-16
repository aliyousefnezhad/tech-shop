import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart';
import { Product } from '../../core/models/product';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon'; // ✅ اضافه شد

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatButton,
    RouterLink,
    MatIcon // ✅ اضافه شد
  ],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}