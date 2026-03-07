import type { Integrante } from "../types";

export const geral: Integrante = {
  nombre: "Gerald Alvarez",
  nombreCorto: "Gerald",
  rol: "Estudiante de Ingenieria en Sistemas",
  biografia:
    "Interesado en desarrollo frontend y diseno de interfaces accesibles. Participa en proyectos academicos enfocados en soluciones web para pequenas organizaciones.",
  correo: "geraldalv9@gmail.com",
  telefono: "+506 6456-8177",
  ubicacion: "Costa Rica",
  educacion: [
    "Bachillerato en Ingenieria en Sistemas de Informacion - UNA (En curso)",
  ],
  experiencia: [
    "Proyecto universitario: Sistema de reservas para laboratorio (React + Firebase)",
    "Apoyo en sitio web para emprendimiento local (HTML, CSS, JavaScript)",
  ],
  habilidades: ["HTML5", "CSS3", "JavaScript", "React", "Git", "Figma"],
  idiomas: ["Espanol - Nativo", "Ingles - Intermedio"],
  proyectos: [
    {
      titulo: "Proyecto Gerald 1 - Sistema de Reservas",
      descripcion:
        "Aplicacion web para gestionar espacios y equipos universitarios. Incluye autenticacion, calendario de disponibilidad y confirmaciones por correo. Gerald se encargo de la interfaz, componentes y validaciones del lado del cliente.",
      tecnologias: ["React", "TypeScript", "Firebase"],
      rol: "Rol de Gerald: Diseno de interfaz y desarrollo frontend.",
      imagen: "https://placehold.co/600x360/114b5f/f7f7f2?text=Gerald+Proyecto+1",
      altImagen: "Proyecto de reservas de Gerald",
      urlRepo: "https://github.com/USUARIO/REPOSITORIO-GERALD-1",
      urlDemo: "https://TU-DEPLOY-GERALD-1.com",
    },
    {
      titulo: "Proyecto Gerald 2 - Dashboard Academico",
      descripcion:
        "Panel para visualizar metricas academicas, asistencia y rendimiento por curso. Se implementaron graficos interactivos, filtros por periodo y diseno adaptable para dispositivos moviles.",
      tecnologias: ["React", "Chart.js", "CSS"],
      rol: "Rol de Gerald: Maquetacion, graficos y experiencia de usuario.",
      imagen: "https://placehold.co/600x360/456990/f7f7f2?text=Gerald+Proyecto+2",
      altImagen: "Dashboard academico creado por Gerald",
      urlRepo: "https://github.com/USUARIO/REPOSITORIO-GERALD-2",
      urlDemo: "https://TU-DEPLOY-GERALD-2.com",
    },
    {
      titulo: "Proyecto Gerald 3 - Landing Institucional",
      descripcion:
        "Sitio informativo para una iniciativa universitaria con enfoque en accesibilidad web, secciones semanticas y optimizacion de tiempos de carga para mejorar la experiencia de navegacion.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      rol: "Rol de Gerald: Arquitectura visual y accesibilidad.",
      imagen: "https://placehold.co/600x360/028090/f7f7f2?text=Gerald+Proyecto+3",
      altImagen: "Landing institucional de Gerald",
      urlRepo: "https://github.com/USUARIO/REPOSITORIO-GERALD-3",
      urlDemo: "https://TU-DEPLOY-GERALD-3.com",
    },
  ],
};
