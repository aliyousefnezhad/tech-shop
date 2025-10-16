import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatButton, RouterLink],
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss']
})
export class AdminComponent {}