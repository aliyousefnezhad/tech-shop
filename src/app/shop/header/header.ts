import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CartService } from '../../core/services/cart';
import { AuthService } from '../../core/services/auth';
import { RouterLinkWithHref } from '@angular/router'; // ✅ 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbar, MatButton, MatIconModule, MatMenuModule, RouterLinkWithHref],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  scrolled = false;
  cartItemCount = 0;

  constructor(
    private cartService: CartService,
    private router: Router,
    public authService: AuthService
  ) {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItemCount = items.length;
    });
    this.authService.loadUserFromStorage();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  openCheckoutPreview() {
    if (this.cartItemCount > 0) {
      this.router.navigate(['/shop/checkout-preview']);
    } else {
      alert('سبد خرید شما خالی است.');
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/shop/home']);
  }
}