import type { Integrante } from "../types";

export const joseth: Integrante = {
  nombre: "Joseth - Cambiar Apellido",
  nombreCorto: "Joseth",
  rol: "Estudiante de Ingenieria en Sistemas",
  biografia:
    "Motivado por la creacion de aplicaciones completas y optimizacion de procesos. Tiene experiencia en prototipos funcionales para cursos y practicas.",
  correo: "joseth@correo.com",
  telefono: "+506 1111-1111",
  ubicacion: "Costa Rica",
  educacion: [
    "Bachillerato en Ingenieria en Sistemas de Informacion - UNA (En curso)",
    "Curso de Bases de Datos Relacionales",
  ],
  experiencia: [
    "Proyecto de curso: Sistema de inventario para pyme (Node.js + MySQL)",
    "Practica academica: Landing page institucional con accesibilidad mejorada",
  ],
  habilidades: ["TypeScript", "Node.js", "SQL", "React", "GitHub", "Scrum"],
  idiomas: ["Espanol - Nativo", "Ingles - Intermedio"],
  proyectos: [
    {
      titulo: "Proyecto Joseth 1 - Inventario PyME",
      descripcion:
        "Solucion para registrar productos, categorias y movimientos de inventario en pequenas empresas. Se implementaron reportes y alertas de stock para apoyar decisiones operativas.",
      tecnologias: ["Node.js", "Express", "MySQL"],
      rol: "Rol de Joseth: Backend, modelado de datos y API REST.",
      imagen: "https://placehold.co/600x360/264653/f7f7f2?text=Joseth+Proyecto+1",
      altImagen: "Sistema de inventario desarrollado por Joseth",
      urlRepo: "https://github.com/USUARIO/REPOSITORIO-JOSETH-1",
      urlDemo: "https://TU-DEPLOY-JOSETH-1.com",
    },
    {
      titulo: "Proyecto Joseth 2 - Plataforma de Cursos",
      descripcion:
        "Portal para publicar cursos, registrar estudiantes y visualizar progreso. Incluye panel administrativo, gestion de contenidos y control de roles por tipo de usuario.",
      tecnologias: ["React", "Node.js", "PostgreSQL"],
      rol: "Rol de Joseth: Integracion frontend-backend y pruebas funcionales.",
      imagen: "https://placehold.co/600x360/1d3557/f7f7f2?text=Joseth+Proyecto+2",
      altImagen: "Plataforma de cursos creada por Joseth",
      urlRepo: "https://github.com/USUARIO/REPOSITORIO-JOSETH-2",
      urlDemo: "https://TU-DEPLOY-JOSETH-2.com",
    },
    {
      titulo: "Proyecto Joseth 3 - Control de Practicas",
      descripcion:
        "Aplicacion para seguimiento de horas de practica profesional, evidencias y aprobaciones de tutores. Se agrego autenticacion y panel de seguimiento para estudiantes.",
      tecnologias: ["TypeScript", "MongoDB", "Express"],
      rol: "Rol de Joseth: Logica de negocio y seguridad basica.",
      imagen: "https://placehold.co/600x360/2a9d8f/f7f7f2?text=Joseth+Proyecto+3",
      altImagen: "Sistema de control de practicas de Joseth",
      urlRepo: "https://github.com/USUARIO/REPOSITORIO-JOSETH-3",
      urlDemo: "https://TU-DEPLOY-JOSETH-3.com",
    },
  ],
};
