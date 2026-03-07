import type { Integrante } from "../types";

export const joseth: Integrante = {
  nombre: "Joseth Manuel Vargas Venegas",
  nombreCorto: "Joseth",
  rol: "Estudiante de Ingenieria en Sistemas",
  biografia:
    "Soy estudiante de Ingeniería en Sistemas, apasionado por el aprendizaje continuo y el desarrollo de aplicaciones innovadoras. Me gusta crear soluciones que faciliten la vida de las personas y resuelvan problemas reales.",
  correo: "joseth.vargas.venegas@est.una.ac.cr",
  telefono: "+506 6226-5978",
  ubicacion: "Costa Rica, Guanacaste, Hojancha",
  educacion: [
    "Bachillerato en Ingenieria en Sistemas de Informacion - UNA (En curso)",
    "Bachillerato en ingenieria electrica - UTN",
  ],
  experiencia: [
    "Proyecto de Ingenieria de Sistemas: Plataforma Web para la ASADA Pilangosta (React+Vite, NestJs,MySQL, Docker)",
    "Practica diplomado: Tecnico electrico en INTERGLOO.",
    "Practica profesional supervisada: Tecnico electrico en Megatropico S.A.",
  ],
  habilidades: [
    "HTML",
    "CSS",
    "TypeScript",
    "MYSQL",
    "React+Vite",
    "NestJs",
    "GitHub",
    "Scrum",
    "C++",
    "C#",
    "Docker",
  ],
  idiomas: ["Español - Lengua Materna", "Ingles - A2"],
  proyectos: [
    {
      titulo: "Proyecto ASADA Pilangosta",
      descripcion:
        "Sistema de gestion para ASADA PILANGOSTA, incluye panel de control para monitoreo de gestion, facturacion y reportes..",
      tecnologias: ["Node.js", "React + Vite", "NestJs", "TypeORM", "MySQL"],
      rol: "Full Stack, colaboracion en diseño de base de datos y QA.",
      imagen:
        "https://geraldalvarez1209.github.io/logo-email/WhatsApp%20Image%202025-09-25%20at%208.38.52%20PM.jpeg",
      altImagen: "Sistema de inventario desarrollado por Joseth",
      urlRepo: "https://github.com/ROSHIII96/ASADA-Pilangosta-Frontend.git",
      urlDemo: "http://72.62.202.87/",
    },
    {
      titulo: "Proyecto de Paradigmas de Programacion",
      descripcion:
        "Portal para publicar cursos, registrar estudiantes y visualizar progreso. Incluye panel administrativo, gestion de contenidos y control de roles por tipo de usuario.",
      tecnologias: ["React", "Node.js", "PostgreSQL"],
      rol: "Rol de Joseth: Integracion frontend-backend y pruebas funcionales.",
      imagen: "src/assets/Imagenes/Proyecto juego de memoria.png",
      altImagen: "Plataforma de cursos creada por Joseth",
      urlRepo: "https://github.com/Jhonpy22/Proy_Paradig_Front.git",
      urlDemo: "https://TU-DEPLOY-JOSETH-2.com",
    },
    {
      titulo: "Proyecto Joseth 3 - Control de Practicas",
      descripcion:
        "Aplicacion para seguimiento de horas de practica profesional, evidencias y aprobaciones de tutores. Se agrego autenticacion y panel de seguimiento para estudiantes.",
      tecnologias: ["TypeScript", "MongoDB", "Express"],
      rol: "Rol de Joseth: Logica de negocio y seguridad basica.",
      imagen: "src/assets/Imagenes/Proyecto portafolio1.png",
      altImagen: "Sistema de control de practicas de Joseth",
      urlRepo: "https://github.com/USUARIO/REPOSITORIO-JOSETH-3",
      urlDemo: "https://web-portafolio-2026.vercel.app/",
    },
  ],
};
