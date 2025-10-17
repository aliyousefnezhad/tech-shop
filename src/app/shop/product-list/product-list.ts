import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../core/services/product';
import { Product } from '../../core/models/product';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CurrencyPipe, MatButton, MatIcon],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  starArray = Array(5);

  constructor(
    private productService: ProductService,
    public route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    // بارگذاری تمام محصولات
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.applyFilter();
    });

    // شنود تغییرات پارامترهای URL
    this.route.queryParams.subscribe(params => {
      this.applyFilter(params['category']);
    });
  }

  applyFilter(category?: string) {
    if (category) {
      this.filteredProducts = this.products.filter(p => p.category === category);
    } else {
      this.filteredProducts = this.products; // همه محصولات
    }
  }
}