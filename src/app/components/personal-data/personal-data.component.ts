import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosService } from '../../services/datos.service';
import { CvData } from '../../interfaces/cv-data.interfaces';

@Component({
  selector: 'app-personal-data',
  standalone: true,
  imports: [CommonModule], // ✅ HttpClient NO se importa en componentes standalone
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {
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
