import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product';
import { Product } from '../../core/models/product';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { CartService } from '../../core/services/cart';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatButton,
    NgIf,
    MatIcon
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: 'all' | 'laptop' | 'phone' | 'headphone' = 'all';
  starArray = Array(5);

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  filterProducts(category: 'all' | 'laptop' | 'phone' | 'headphone') {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(p => p.category === category);
    }
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} به سبد خرید اضافه شد!`);
  }
}