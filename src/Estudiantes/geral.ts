import type { Integrante } from "../types";

export const geral: Integrante = {
  nombre: "Gerald Alvarez Leiton",
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
    "Apoyo en sitio web para emprendimiento local (HTML, React,CSS, TypeScript)",
    "Gestión de Logística de Carga y Descarga de Materiales: Coordinación y supervisión de operaciones logísticas para la carga y descarga de camiones y contenedores con madera, optimizando tiempos y recursos.",
    "Medición y Análisis de Parcelas Forestales: Realización de mediciones y levantamientos topográficos en parcelas de teca, melina y cebo, aplicando métodos de análisis para la gestión sostenible de recursos naturales.",
  ],
  habilidades: ["HTML5", "CSS", "TypeScript", "React", "Git", "Figma"],
  idiomas: ["Espanol - Nativo", "Ingles - Principiante"],
  proyectos: [
    {
      titulo: "Proyecto Gerald 1 - Sistema de Tickets",
      descripcion:
        "Aplicacion web para gestionar compras y ventas de tickets. Incluye autenticacion, confirmaciones por correo. Gerald se encargo de el backend, componentes y validaciones del lado del cliente y administrador.",
      tecnologias: ["React", "TypeScript", "MYSQL"],
      rol: "Rol de Gerald: Diseno de interfaz y desarrollo Backend.",
      imagen:
        "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/zendeskticketingsystemsoftware.png",
      altImagen: "Proyecto de tickets de Gerald",
      urlRepo: "https://github.com/JasonReyesOcampos/sistema-tickets.git",
      urlDemo: "Corrido localmente en http://localhost:3000",
    },
    {
      titulo: "Proyecto Gerald 2 - ASADA PILANGOSTA",
      descripcion:
        "Sistema de gestion para ASADA PILANGOSTA, incluye panel de control para monitoreo de gestion, facturacion y reportes.",
      tecnologias: ["React", "NestJS", "MySQL"],
      rol: "Rol de Gerald: Fullstack",
      imagen:
        "https://geraldalvarez1209.github.io/logo-email/WhatsApp%20Image%202025-09-25%20at%208.38.52%20PM.jpeg",
      altImagen: "ASADA PILANGOSTA",
      urlRepo: "https://github.com/ROSHIII96/ASADA-Pilangosta-Frontend.git",
      urlDemo: "http://72.62.202.87/",
    },
    {
      titulo: "Proyecto Gerald 3 - Portafolio Personal",
      descripcion:
        "Portafolio web interactivo, donde puedes explorar el curriculum y portafolio de cada integrante. Con enfoque en accesibilidad y optimización para una experiencia de navegación rápida y fluida.",
      tecnologias: ["HTML", "REACT", "CSS", "TypeScript"],
      rol: "Rol de Gerald: Arquitectura visual",
      imagen: "https://res.cloudinary.com/dqqnhxhcp/image/upload/v1772858724/asada/avisos/PILANGOSTA/Screenshot_2026-03-06_195534.png",
      altImagen: "Inicio del portafolio",
      urlRepo: "https://github.com/ROSHIII96/web-portafolio-2026.git",
      urlDemo: "https://web-portafolio-2026.vercel.app/",
    },
  ],
};
