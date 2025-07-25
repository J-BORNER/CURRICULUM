import { Component, OnInit } from '@angular/core';
import { CvData } from '../../interfaces/cv-data.interfaces';
import { DatosService } from '../../services/datos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// Configuración temporal con FormSubmit
const FORM_SUBMIT_URL = 'https://formsubmit.co/ajax/brysnmendezlima1@gmail.com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  cvData!: CvData;
  loading = true;
  error = false;

  offerForm = {
    name: '',
    email: '',
    company: '',
    message: '',
    file: null as File | null,
    fileName: ''
  };

  formSubmitted = false;
  formError = '';
  isSending = false;

  constructor(
    private datosService: DatosService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.datosService.getDatos().subscribe({
      next: (data: CvData) => {
        this.cvData = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  async onOfferSubmit() {
    if (!this.validateForm() || this.isSending) return;

    this.isSending = true;
    this.formError = '';

    try {
      const formData = new FormData();
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');
      formData.append('_subject', `Oferta de ${this.offerForm.name}`);
      formData.append('name', this.offerForm.name);
      formData.append('email', this.offerForm.email);
      formData.append('company', this.offerForm.company);
      formData.append('message', this.offerForm.message);

      if (this.offerForm.file) {
        formData.append('file', this.offerForm.file, this.offerForm.fileName);
      }

      await this.http.post(FORM_SUBMIT_URL, formData, {
        responseType: 'text'
      }).toPromise();

      this.formSubmitted = true;
      this.resetForm();
    } catch (err) {
      console.error('Error al enviar:', err);
      this.formError = 'Error al enviar. Intenta nuevamente.';
    } finally {
      this.isSending = false;
    }
  }

  private validateForm(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.offerForm.email)) {
      this.formError = 'Email inválido';
      return false;
    }
    if (!this.offerForm.message.trim()) {
      this.formError = 'El mensaje no puede estar vacío';
      return false;
    }
    if (this.offerForm.file && this.offerForm.file.size > 5 * 1024 * 1024) {
      this.formError = 'El archivo no puede superar 5MB';
      return false;
    }
    return true;
  }

  private resetForm() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) fileInput.value = '';

    this.offerForm = {
      name: '',
      email: '',
      company: '',
      message: '',
      file: null,
      fileName: ''
    };
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.offerForm.file = input.files[0];
      this.offerForm.fileName = input.files[0].name;
    } else {
      this.offerForm.fileName = '';
    }
  }
}
