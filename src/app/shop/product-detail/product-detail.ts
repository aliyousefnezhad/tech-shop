import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product';
import { Product } from '../../core/models/product';
import { NgIf, CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CartService } from '../../core/services/cart'; // ✅ اضافه شد

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, CurrencyPipe, MatButton, MatIcon],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  starArray = Array(5);

  // ❌ این خط اشتباه است — حذف شود
  // private cartService: CartService

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService // ✅ اینجا inject شود
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe(product => {
      this.product = product || null;
    });
  }

 addToCart() {
  if (this.product) {
    this.cartService.addToCart(this.product);
    alert(`${this.product.name} به سبد خرید اضافه شد!`);
  }
}

  getSpecsArray() {
    if (!this.product?.specs) return [];
    return Object.keys(this.product.specs).map(key => ({
      key,
      value: this.product!.specs[key]
    }));
  }
}