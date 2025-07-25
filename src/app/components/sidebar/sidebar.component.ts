import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor

@Component({
  selector: 'app-sidebar',
  standalone: true,  // Esto es necesario cuando usas imports directamente en el componente
  imports: [CommonModule],  // Añadimos CommonModule para directivas como *ngFor
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']  // Cambiado de styleUrl a styleUrls
})
export class SidebarComponent {
  // Cambiado de private a public para poder usarlo en la plantilla
  // Añadidos los tipos y corregida la sintaxis de los objetos en el array
  public socialNetworks = [
    {
      name: "Facebook",
      icon: "pi pi-facebook",  // Usando iconos de PrimeIcons
      link: "https://www.facebook.com"
    },
    {
      name: "Twitter",
      icon: "pi pi-twitter",
      link: "https://www.twitter.com"
    },
    {
      name: "LinkedIn",
      icon: "pi pi-linkedin",
      link: "https://www.linkedin.com"
    },
    {
      name: "YouTube",
      icon: "pi pi-youtube",
      link: "https://www.Youtube.com"
    },
    {
      name: "GitHub",
      icon: "pi pi-github",
      link: "https://www.Github.com"
    },
    {
      name: "Instagram",
      icon: "pi pi-instagram",
      link: "https://www.Instagram.com"
    },
    {
      name: "Discord",
      icon: "pi pi-discord",
      link: "https://www.Discord.com"
    }
  ];
}
