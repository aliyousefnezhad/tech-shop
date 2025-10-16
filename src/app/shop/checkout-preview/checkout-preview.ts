import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart';
import { Product } from '../../core/models/product';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-preview',
  standalone: true,
  imports: [CurrencyPipe, MatButton, MatIcon],
  templateUrl: './checkout-preview.html',
  styleUrls: ['./checkout-preview.scss']
})
export class CheckoutPreviewComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  proceedToPayment() {
    this.router.navigate(['/shop/bank-gateway']);
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  // ✅ این متد رو اضافه کن
  goToProducts() {
    this.router.navigate(['/shop/products']);
  }
}