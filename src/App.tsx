import { useState } from "react";
import type { FormEvent } from "react";
import "./App.css";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  role: string;
  image: string;
  imageAlt: string;
  repoUrl: string;
  liveUrl: string;
};

type Member = {
  name: string;
  shortName: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  education: string[];
  experience: string[];
  skills: string[];
  languages: string[];
  projects: Project[];
};

const members: Member[] = [
  {
    name: "Gerald - Cambiar Apellido",
    shortName: "Gerald",
    role: "Estudiante de Ingenieria en Sistemas",
    bio: "Interesado en desarrollo frontend y diseno de interfaces accesibles. Participa en proyectos academicos enfocados en soluciones web para pequenas organizaciones.",
    email: "gerald@correo.com",
    phone: "+506 0000-0000",
    location: "Costa Rica",
    education: [
      "Bachillerato en Ingenieria en Sistemas de Informacion - UNA (En curso)",
      "Curso de Diseno Web Responsivo",
    ],
    experience: [
      "Proyecto universitario: Sistema de reservas para laboratorio (React + Firebase)",
      "Apoyo en sitio web para emprendimiento local (HTML, CSS, JavaScript)",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Git", "Figma"],
    languages: ["Espanol - Nativo", "Ingles - Intermedio"],
    projects: [
      {
        title: "Proyecto Gerald 1 - Sistema de Reservas",
        description:
          "Aplicacion web para gestionar espacios y equipos universitarios. Incluye autenticacion, calendario de disponibilidad y confirmaciones por correo. Gerald se encargo de la interfaz, componentes y validaciones del lado del cliente.",
        technologies: ["React", "TypeScript", "Firebase"],
        role: "Rol de Gerald: Diseno de interfaz y desarrollo frontend.",
        image:
          "https://placehold.co/600x360/114b5f/f7f7f2?text=Gerald+Proyecto+1",
        imageAlt: "Proyecto de reservas de Gerald",
        repoUrl: "https://github.com/USUARIO/REPOSITORIO-GERALD-1",
        liveUrl: "https://TU-DEPLOY-GERALD-1.com",
      },
      {
        title: "Proyecto Gerald 2 - Dashboard Academico",
        description:
          "Panel para visualizar metricas academicas, asistencia y rendimiento por curso. Se implementaron graficos interactivos, filtros por periodo y diseno adaptable para dispositivos moviles.",
        technologies: ["React", "Chart.js", "CSS"],
        role: "Rol de Gerald: Maquetacion, graficos y experiencia de usuario.",
        image:
          "https://placehold.co/600x360/456990/f7f7f2?text=Gerald+Proyecto+2",
        imageAlt: "Dashboard academico creado por Gerald",
        repoUrl: "https://github.com/USUARIO/REPOSITORIO-GERALD-2",
        liveUrl: "https://TU-DEPLOY-GERALD-2.com",
      },
      {
        title: "Proyecto Gerald 3 - Landing Institucional",
        description:
          "Sitio informativo para una iniciativa universitaria con enfoque en accesibilidad web, secciones semanticas y optimizacion de tiempos de carga para mejorar la experiencia de navegacion.",
        technologies: ["HTML", "CSS", "JavaScript"],
        role: "Rol de Gerald: Arquitectura visual y accesibilidad.",
        image:
          "https://placehold.co/600x360/028090/f7f7f2?text=Gerald+Proyecto+3",
        imageAlt: "Landing institucional de Gerald",
        repoUrl: "https://github.com/USUARIO/REPOSITORIO-GERALD-3",
        liveUrl: "https://TU-DEPLOY-GERALD-3.com",
      },
    ],
  },
  {
    name: "Joseth - Cambiar Apellido",
    shortName: "Joseth",
    role: "Estudiante de Ingenieria en Sistemas",
    bio: "Motivado por la creacion de aplicaciones completas y optimizacion de procesos. Tiene experiencia en prototipos funcionales para cursos y practicas.",
    email: "joseth@correo.com",
    phone: "+506 1111-1111",
    location: "Costa Rica",
    education: [
      "Bachillerato en Ingenieria en Sistemas de Informacion - UNA (En curso)",
      "Curso de Bases de Datos Relacionales",
    ],
    experience: [
      "Proyecto de curso: Sistema de inventario para pyme (Node.js + MySQL)",
      "Practica academica: Landing page institucional con accesibilidad mejorada",
    ],
    skills: ["TypeScript", "Node.js", "SQL", "React", "GitHub", "Scrum"],
    languages: ["Espanol - Nativo", "Ingles - Intermedio"],
    projects: [
      {
        title: "Proyecto Joseth 1 - Inventario PyME",
        description:
          "Solucion para registrar productos, categorias y movimientos de inventario en pequenas empresas. Se implementaron reportes y alertas de stock para apoyar decisiones operativas.",
        technologies: ["Node.js", "Express", "MySQL"],
        role: "Rol de Joseth: Backend, modelado de datos y API REST.",
        image:
          "https://placehold.co/600x360/264653/f7f7f2?text=Joseth+Proyecto+1",
        imageAlt: "Sistema de inventario desarrollado por Joseth",
        repoUrl: "https://github.com/USUARIO/REPOSITORIO-JOSETH-1",
        liveUrl: "https://TU-DEPLOY-JOSETH-1.com",
      },
      {
        title: "Proyecto Joseth 2 - Plataforma de Cursos",
        description:
          "Portal para publicar cursos, registrar estudiantes y visualizar progreso. Incluye panel administrativo, gestion de contenidos y control de roles por tipo de usuario.",
        technologies: ["React", "Node.js", "PostgreSQL"],
        role: "Rol de Joseth: Integracion frontend-backend y pruebas funcionales.",
        image:
          "https://placehold.co/600x360/1d3557/f7f7f2?text=Joseth+Proyecto+2",
        imageAlt: "Plataforma de cursos creada por Joseth",
        repoUrl: "https://github.com/USUARIO/REPOSITORIO-JOSETH-2",
        liveUrl: "https://TU-DEPLOY-JOSETH-2.com",
      },
      {
        title: "Proyecto Joseth 3 - Control de Practicas",
        description:
          "Aplicacion para seguimiento de horas de practica profesional, evidencias y aprobaciones de tutores. Se agrego autenticacion y panel de seguimiento para estudiantes.",
        technologies: ["TypeScript", "MongoDB", "Express"],
        role: "Rol de Joseth: Logica de negocio y seguridad basica.",
        image:
          "https://placehold.co/600x360/2a9d8f/f7f7f2?text=Joseth+Proyecto+3",
        imageAlt: "Sistema de control de practicas de Joseth",
        repoUrl: "https://github.com/USUARIO/REPOSITORIO-JOSETH-3",
        liveUrl: "https://TU-DEPLOY-JOSETH-3.com",
      },
    ],
  },
];

function App() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [indiceIntegranteActivo, setIndiceIntegranteActivo] = useState(0);
  const [proyectoExpandido, setProyectoExpandido] = useState<number | null>(
    null,
  );
  const [estadoContacto, setEstadoContacto] = useState("");
  const [datosContacto, setDatosContacto] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const anioActual = new Date().getFullYear();
  const integranteActivo = members[indiceIntegranteActivo];

  const cambiarTema = () => {
    setModoOscuro((prev) => {
      const nextTheme = !prev;
      document.body.dataset.theme = nextTheme ? "dark" : "light";
      return nextTheme;
    });
  };

  const cambiarPerfil = (profileIndex: number) => {
    setIndiceIntegranteActivo(profileIndex);
    setProyectoExpandido(null);
    setEstadoContacto("");
  };

  const actualizarCampoContacto = (
    campo: "nombre" | "correo" | "mensaje",
    valor: string,
  ) => {
    setDatosContacto((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const enviarFormulario = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (datosContacto.nombre.trim().length < 4) {
      setEstadoContacto("El nombre debe tener al menos 4 caracteres.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(datosContacto.correo)) {
      setEstadoContacto("Ingresa un correo valido.");
      return;
    }

    if (datosContacto.mensaje.trim().length < 10) {
      setEstadoContacto("El mensaje debe tener minimo 10 caracteres.");
      return;
    }

    setEstadoContacto(
      "Mensaje enviado correctamente. Te responderemos pronto.",
    );
    setDatosContacto({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <div className="site-wrapper">
      <header className="hero" id="inicio">
        <nav className="top-nav" aria-label="Menu principal">
          <a href="#inicio">Inicio</a>
          <a href="#educacion">Educacion</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#idiomas">Idiomas</a>
          <a href="#experiencia-laboral">Experiencia laboral</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Laboratorio 01 | Curriculum y Portafolio</p>
          <h1>Portafolio Web de Equipo</h1>
          <p>
            Selecciona un perfil para ver el curriculum y portafolio individual
            de cada integrante. Cada seccion se actualiza automaticamente segun
            la persona elegida.
          </p>
          <div
            className="profile-switcher"
            role="tablist"
            aria-label="Perfiles"
          >
            {members.map((member, index) => {
              const isActive = index === indiceIntegranteActivo;
              return (
                <button
                  key={member.shortName}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`profile-switch-btn ${isActive ? "active" : ""}`}
                  onClick={() => cambiarPerfil(index)}
                >
                  Ver CV de {member.shortName}
                </button>
              );
            })}
          </div>
          <p className="active-profile-indicator">
            Perfil activo: <strong>{integranteActivo.name}</strong>
          </p>
          <button type="button" className="theme-btn" onClick={cambiarTema}>
            Cambiar a modo {modoOscuro ? "claro" : "oscuro"}
          </button>
        </div>
      </header>

      <main>
        <section className="section" aria-labelledby="presentacion-titulo">
          <h2 id="presentacion-titulo">Inicio / Presentacion</h2>
          <div className="single-view-grid">
            <article className="member-card">
              <h3>{integranteActivo.name}</h3>
              <p className="member-role">{integranteActivo.role}</p>
              <p>{integranteActivo.bio}</p>
              <ul>
                <li>Email: {integranteActivo.email}</li>
                <li>Telefono: {integranteActivo.phone}</li>
                <li>Ubicacion: {integranteActivo.location}</li>
              </ul>
            </article>
          </div>
        </section>

        <section
          className="section"
          id="educacion"
          aria-labelledby="educacion-titulo"
        >
          <h2 id="educacion-titulo">Educacion</h2>
          <div className="single-view-grid">
            <article className="info-card">
              <h3>{integranteActivo.name}</h3>
              <h4>Formacion academica</h4>
              <ul>
                {integranteActivo.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section
          className="section"
          id="habilidades"
          aria-labelledby="habilidades-titulo"
        >
          <h2 id="habilidades-titulo">Habilidades</h2>
          <div className="single-view-grid">
            <article className="info-card">
              <h3>{integranteActivo.name}</h3>
              <div className="badge-list">
                {integranteActivo.skills.map((skill) => (
                  <span key={skill} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section
          className="section"
          id="idiomas"
          aria-labelledby="idiomas-titulo"
        >
          <h2 id="idiomas-titulo">Idiomas</h2>
          <table className="languages-table">
            <caption>
              Dominio de idiomas de {integranteActivo.shortName}
            </caption>
            <thead>
              <tr>
                <th>Integrante</th>
                <th>Idiomas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{integranteActivo.name}</td>
                <td>{integranteActivo.languages.join(" | ")}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section
          className="section"
          id="experiencia-laboral"
          aria-labelledby="experiencia-titulo"
        >
          <h2 id="experiencia-titulo">Experiencia laboral</h2>
          <div className="single-view-grid">
            <article className="info-card">
              <h3>{integranteActivo.name}</h3>
              <h4>Experiencia relevante</h4>
              <ul>
                {integranteActivo.experience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section
          className="section"
          id="portafolio"
          aria-labelledby="portafolio-titulo"
        >
          <h2 id="portafolio-titulo">
            Portafolio de {integranteActivo.shortName}
          </h2>
          <div className="projects-grid">
            {integranteActivo.projects.map((project, index) => {
              const isExpanded = proyectoExpandido === index;
              return (
                <article className="project-card" key={project.title}>
                  <img src={project.image} alt={project.imageAlt} />
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p className="project-role">{project.role}</p>
                    <p className="project-tech">
                      Tecnologias: {project.technologies.join(", ")}
                    </p>

                    {isExpanded && (
                      <div className="project-links" aria-live="polite">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ver repositorio
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ver demo
                        </a>
                      </div>
                    )}

                    <button
                      type="button"
                      className="details-btn"
                      onClick={() =>
                        setProyectoExpandido(isExpanded ? null : index)
                      }
                    >
                      {isExpanded ? "Ocultar detalles" : "Ver mas detalles"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="section"
          id="contacto"
          aria-labelledby="contacto-titulo"
        >
          <h2 id="contacto-titulo">Formulario de contacto</h2>
          <form className="contact-form" onSubmit={enviarFormulario} noValidate>
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              value={datosContacto.nombre}
              onChange={(event) =>
                actualizarCampoContacto("nombre", event.target.value)
              }
              placeholder="Escribe tu nombre"
            />

            <label htmlFor="correo">Correo</label>
            <input
              id="correo"
              type="email"
              value={datosContacto.correo}
              onChange={(event) =>
                actualizarCampoContacto("correo", event.target.value)
              }
              placeholder="nombre@correo.com"
            />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              value={datosContacto.mensaje}
              onChange={(event) =>
                actualizarCampoContacto("mensaje", event.target.value)
              }
              placeholder="Deja un mensaje breve"
              rows={5}
            />

            <button type="submit" className="submit-btn">
              Enviar mensaje a {integranteActivo.shortName}
            </button>
            {estadoContacto && <p className="form-status">{estadoContacto}</p>}
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>
          {anioActual} - Portafolio academico en equipo. Reemplazar links de
          proyecto en <code>src/App.tsx</code>.
        </p>
      </footer>
    </div>
  );
}

export default App;
