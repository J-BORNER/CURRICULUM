export interface Contacto {
  tipo: string;
  valor: string;
}

export interface Experiencia {
  puesto: string;
  empresa: string;
  periodo: string;
  descripcion: string;
}

export interface Habilidad {
  nombre: string;
  nivel: string;
}

export interface Estudio {
  descripcion: any;
  titulo: string;
  institucion: string;
  periodo: string;
}

export interface DatosPersonales {
  nombre: string;
  edad: number;
  nacionalidad: string;
  correo: string;
  direccion: string;
  telefono: string;
  acercaDe: string;
}

export interface CvData {
  datosPersonales: DatosPersonales;
  contactos: Contacto[];
  experiencia: Experiencia[];
  habilidades: Habilidad[];
  estudios: Estudio[];
}
