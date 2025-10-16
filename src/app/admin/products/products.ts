import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product';
import { Product } from '../../core/models/product';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-admin',
  standalone: true,
  imports: [
    MatButton,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class ProductsAdminComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = {
    id: 0,
    name: '',
    brand: '',
    category: 'laptop',
    price: 0,
    image: '',
    description: '',
    specs: {},
    inStock: true,
    rating: 4.5
  };
  editingProduct: Product | null = null;
  previewImage: string | null = null;
  selectedFile: File | null = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  addProduct() {
    if (this.newProduct.name && this.newProduct.price > 0 && this.selectedFile) {
      const maxId = Math.max(...this.products.map(p => p.id), 0);
      this.newProduct.id = maxId + 1;
      if (this.previewImage) {
        this.newProduct.image = this.previewImage;
      }
      this.products.push({ ...this.newProduct });
      this.resetForm();
    } else {
      alert('لطفاً نام، قیمت و تصویر محصول را وارد کنید.');
    }
  }

  editProduct(product: Product) {
    this.editingProduct = { ...product };
    this.newProduct = { ...product }; // برای ویرایش
    this.previewImage = product.image || null;
    this.selectedFile = null; // فایل قدیمی رو پاک کن
  }

  updateProduct() {
    if (this.editingProduct && this.newProduct.name && this.newProduct.price > 0) {
      const index = this.products.findIndex(p => p.id === this.editingProduct!.id);
      if (index !== -1) {
        this.products[index] = { ...this.newProduct };
        this.resetForm();
      }
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  resetForm() {
    this.newProduct = {
      id: 0,
      name: '',
      brand: '',
      category: 'laptop',
      price: 0,
      image: '',
      description: '',
      specs: {},
      inStock: true,
      rating: 4.5
    };
    this.editingProduct = null;
    this.previewImage = null;
    this.selectedFile = null;
  }
}