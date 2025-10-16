import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {}