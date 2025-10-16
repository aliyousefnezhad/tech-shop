import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-gateway',
  standalone: true,
  templateUrl: './bank-gateway.html',
  styleUrls: ['./bank-gateway.scss']
})
export class BankGatewayComponent {
  constructor(private router: Router) { }

  backToHome() {
    this.router.navigate(['/shop/home']);
  }
}
