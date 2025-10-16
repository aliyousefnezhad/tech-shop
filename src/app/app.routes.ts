import { Routes } from '@angular/router';
import { HomeComponent } from './shop/home/home';
import { ProductListComponent } from './shop/product-list/product-list';
import { ProductDetailComponent } from './shop/product-detail/product-detail';
import { CartComponent } from './shop/cart/cart';
import { CheckoutPreviewComponent } from './shop/checkout-preview/checkout-preview';
import { BankGatewayComponent } from './shop/bank-gateway/bank-gateway';
import { AdminComponent } from './admin/admin';
import { ProductsAdminComponent } from './admin/products/products';
import { LoginComponent } from './auth/login/login';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/shop/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'shop',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout-preview', component: CheckoutPreviewComponent },
      { path: 'bank-gateway', component: BankGatewayComponent },
    ]
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductsAdminComponent }
    ]
  }
];