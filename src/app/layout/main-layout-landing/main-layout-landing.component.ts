import { Component } from '@angular/core';

import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../landing/components/footer/footer.component';
import { HeaderComponent } from '../../landing/components/header/header.component';

@Component({
  selector: 'app-main-layout-event',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,RouterOutlet,RouterModule],
  templateUrl: './main-layout-landing.component.html',
  styleUrl: './main-layout-landing.component.css'
})
export class MainLayoutLandingComponent {

}
