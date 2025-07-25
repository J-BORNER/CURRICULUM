import { Component, OnInit } from '@angular/core';
import { CvData } from '../../interfaces/cv-data.interfaces';
import { DatosService } from '../../services/datos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
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

