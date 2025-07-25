import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component'; // Asegura que la ruta sea correcta
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, SidebarComponent, HeaderComponent], // Todos deben ser standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curriculum-Introducing';
  loading = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        console.log('Spinner ON'); // Debug
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => this.loading = false, 2000); // Retraso para visualización
      }
    });
  }
}
