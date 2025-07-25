import { Component, OnInit } from '@angular/core';
import { CvData } from '../../interfaces/cv-data.interfaces';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  cvData!: CvData;
  loading = true;
  error = false;

  // ✅ Inyección con tipado fuerte
  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    this.datosService.getDatos().subscribe({
      next: (data: CvData) => {
        this.cvData = data;
        this.loading = false;
      },
      error: (err: Error) => {
        console.error('Error loading data:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}
