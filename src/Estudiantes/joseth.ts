import type { Integrante } from "../types";

//Toda la informacion del integrante Joseth Vargas se encuentra a continuacion.
export const joseth: Integrante = {
  nombre: "Joseth Manuel Vargas Venegas",
  nombreCorto: "Joseth",
  rol: "Estudiante de Ingeniería en Sistemas",
  biografia:
    "Soy estudiante de Ingeniería en Sistemas de la Universidad Nacional, apasionado por el aprendizaje continuo y el desarrollo de aplicaciones innovadoras. Me gusta crear soluciones que faciliten la vida de las personas y resuelvan problemas reales.",
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
    "React + Vite",
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
        "Sistema de gestion diseñado para la ASADA PILANGOSTA, incluye panel de control para monitoreo de gestiones, facturacion y reportes.",
      tecnologias: ["Node.js", "React + Vite", "NestJs", "TypeORM", "MySQL"],
      rol: "Rol: Full Stack, colaboracion en diseño de base de datos y QA.",
      imagen:
        "https://geraldalvarez1209.github.io/logo-email/WhatsApp%20Image%202025-09-25%20at%208.38.52%20PM.jpeg",
      altImagen: "Sistema de inventario desarrollado por Joseth",
      urlRepo: "https://github.com/ROSHIII96/ASADA-Pilangosta-Frontend.git",
      urlDemo: "http://72.62.202.87/",
    },
    {
      titulo:
        "Proyecto de Paradigmas de Programacion - Juego de Memoria Multijugador",
      descripcion:
        "Juego de memoria desarrollado con React + Vite, que permite la participación de hasta 4 jugadores simultáneamente. Se conecta a un backend mediante SignalR para gestionar la interacción en tiempo real y ofrecer una experiencia multijugador fluida.",
      tecnologias: ["React + Vite", "Node.js", "SignalR"],
      rol: "Rol: Implementacion del frontend para mostrar las estadisticas del juego.",
      imagen:
        "https://res.cloudinary.com/dqqnhxhcp/image/upload/v1772858755/asada/avisos/PILANGOSTA/Screenshot_2026-03-06_201200.png",
      altImagen: "Plataforma de cursos creada por Joseth",
      urlRepo: "https://github.com/Jhonpy22/Proy_Paradig_Front.git",
      urlDemo: "Corrido localmente en http://localhost:3000",
    },
    {
      titulo: "Proyecto Paradigmas de Programacion - CYBERNOVA",
      descripcion:
        "Aplicación frontend desarrollada con React + Vite que simula una tienda de artículos electrónicos. Permite comprar productos y actualizar su cantidad en tiempo real, integrándose con múltiples backend para reflejar cambios en la base de datos y recibir respuestas dinámicas.",
      tecnologias: ["React + Vite", "Tailwindcss"],
      rol: "Rol: Diseño de interfaz y desarrollo frontend.",
      imagen:
        "https://res.cloudinary.com/dqqnhxhcp/image/upload/v1772858778/asada/avisos/PILANGOSTA/Screenshot_2026-03-06_214529.png",
      altImagen: "Tienda de articulos electronicos creada por Joseth",
      urlRepo: "https://github.com/Jhonpy22/Proyec_Front_II.git",
      urlDemo: "Corrido localmente en http://localhost:3000",
    },
  ],
};
