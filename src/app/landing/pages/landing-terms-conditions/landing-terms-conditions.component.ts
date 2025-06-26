import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing-terms-conditions',
  standalone: true,
  imports: [MatIconModule,MatDividerModule],
  templateUrl: './landing-terms-conditions.component.html',
  styleUrl: './landing-terms-conditions.component.css'
})
export class LandingTermsConditionsComponent {
lastUpdated = '20 de junio de 2023';
}
