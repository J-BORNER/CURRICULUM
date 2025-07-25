import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'

@Component({
  selector: 'header',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  closeOffcanvas() {
    // Cierra el offcanvas cuando se hace clic en un enlace
    const offcanvas = document.getElementById('offcanvasNavbar');
    if (offcanvas) {
      const bsOffcanvas = new (window as any).bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.hide();
    }
  }
}
