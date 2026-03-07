export type Proyecto = {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  rol: string;
  imagen: string;
  altImagen: string;
  urlRepo: string;
  urlDemo: string;
};

export type Integrante = {
  nombre: string;
  nombreCorto: string;
  rol: string;
  biografia: string;
  correo: string;
  telefono: string;
  ubicacion: string;
  educacion: string[];
  experiencia: string[];
  habilidades: string[];
  idiomas: string[];
  proyectos: Proyecto[];
};
