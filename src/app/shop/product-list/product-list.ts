// src/app/shop/product-list/product-list.ts

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product';
import { Product } from '../../core/models/product';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { NgIf } from '@angular/common'; // ⬅️ اضافه شد برای رفع خطا *ngIf

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, MatButton, NgIf], // ⬅️ NgIf اضافه شد
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }
}