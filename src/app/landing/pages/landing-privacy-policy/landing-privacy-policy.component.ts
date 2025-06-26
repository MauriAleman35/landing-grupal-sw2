import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-privacy-policy',
  standalone: true,
  imports: [ RouterModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule],
  templateUrl: './landing-privacy-policy.component.html',
  styleUrl: './landing-privacy-policy.component.css'
})
export class LandingPrivacyPolicyComponent {
lastUpdated = '20 de junio de 2023';
}
