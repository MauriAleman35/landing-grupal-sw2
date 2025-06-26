import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';

interface Tab {
  label: string;
  route: string;
}

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive, MatButtonModule, CommonModule, MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  tabs: Tab[] = [
    { label: "Home", route: "/" },
    { label: "Funciones", route: "/funciones" },
    { label: "Planes", route: "/planes" },
    { label: "Contacto", route: "/contacto" }
  ];

  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  goToPlatform() {
    window.open('https://sw2-grupal-frontend.vercel.app/', '_blank'); // Cambia por tu URL real cuando esté en producción
  }
}