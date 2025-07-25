// src/app/services/datos.service.ts
// src/app/services/datos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CvData } from '../interfaces/cv-data.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatosService {  // <-- Asegúrate que tenga 'export'
  constructor(private http: HttpClient) {}

  getDatos(): Observable<CvData> {
    return this.http.get<CvData>('assets/datos.json');
  }
}
