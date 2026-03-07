import { useState } from "react";
import type { FormEvent } from "react";
import "./App.css";
import type { Integrante } from "./types";
import { geral } from "./Nombres/geral";
import { joseth } from "./Nombres/joseth";

const integrantes: Integrante[] = [geral, joseth];

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
  const integranteActivo = integrantes[indiceIntegranteActivo];

  const cambiarTema = () => {
    setModoOscuro((prev) => {
      const nextTheme = !prev;
      document.body.dataset.theme = nextTheme ? "dark" : "light";
      return nextTheme;
    });
  };

  const cambiarPerfil = (indicePerfil: number) => {
    setIndiceIntegranteActivo(indicePerfil);
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

    setEstadoContacto("Mensaje enviado correctamente. Te responderemos pronto.");
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
          <a href="#experiencia-laboral">Experencia laboral</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Laboratorio 01</p>
          <h1>Portafolio Web de Equipo</h1>
          <p>
            Selecciona un perfil para ver el curriculum y portafolio individual
            de cada integrante. Cada seccion se actualiza automaticamente segun
            la persona elegida.
          </p>
          <div className="profile-switcher" role="tablist" aria-label="Perfiles">
            {integrantes.map((miembro, index) => {
              const estaActivo = index === indiceIntegranteActivo;
              return (
                <button
                  key={miembro.nombreCorto}
                  type="button"
                  role="tab"
                  aria-selected={estaActivo}
                  className={`profile-switch-btn ${estaActivo ? "active" : ""}`}
                  onClick={() => cambiarPerfil(index)}
                >
                  Ver CV de {miembro.nombreCorto}
                </button>
              );
            })}
          </div>
          <p className="active-profile-indicator">
            Perfil activo: <strong>{integranteActivo.nombre}</strong>
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
              <h3>{integranteActivo.nombre}</h3>
              <p className="member-role">{integranteActivo.rol}</p>
              <p>{integranteActivo.biografia}</p>
              <ul>
                <li>Email: {integranteActivo.correo}</li>
                <li>Telefono: {integranteActivo.telefono}</li>
                <li>Ubicacion: {integranteActivo.ubicacion}</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="educacion" aria-labelledby="educacion-titulo">
          <h2 id="educacion-titulo">Educacion</h2>
          <div className="single-view-grid">
            <article className="info-card">
              <h3>{integranteActivo.nombre}</h3>
              <h4>Formacion academica</h4>
              <ul>
                {integranteActivo.educacion.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="habilidades" aria-labelledby="habilidades-titulo">
          <h2 id="habilidades-titulo">Habilidades</h2>
          <div className="single-view-grid">
            <article className="info-card">
              <h3>{integranteActivo.nombre}</h3>
              <div className="badge-list">
                {integranteActivo.habilidades.map((habilidad) => (
                  <span key={habilidad} className="badge">
                    {habilidad}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="idiomas" aria-labelledby="idiomas-titulo">
          <h2 id="idiomas-titulo">Idiomas</h2>
          <table className="languages-table">
            <caption>Dominio de idiomas de {integranteActivo.nombreCorto}</caption>
            <thead>
              <tr>
                <th>Integrante</th>
                <th>Idiomas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{integranteActivo.nombre}</td>
                <td>{integranteActivo.idiomas.join(" | ")}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="section" id="experiencia-laboral" aria-labelledby="experiencia-titulo">
          <h2 id="experiencia-titulo">Experiencia laboral</h2>
          <div className="single-view-grid">
            <article className="info-card">
              <h3>{integranteActivo.nombre}</h3>
              <h4>Experiencia relevante</h4>
              <ul>
                {integranteActivo.experiencia.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="portafolio" aria-labelledby="portafolio-titulo">
          <h2 id="portafolio-titulo">Portafolio de {integranteActivo.nombreCorto}</h2>
          <div className="projects-grid">
            {integranteActivo.proyectos.map((proyecto, index) => {
              const estaExpandido = proyectoExpandido === index;
              return (
                <article className="project-card" key={proyecto.titulo}>
                  <img src={proyecto.imagen} alt={proyecto.altImagen} />
                  <div className="project-body">
                    <h3>{proyecto.titulo}</h3>
                    <p>{proyecto.descripcion}</p>
                    <p className="project-role">{proyecto.rol}</p>
                    <p className="project-tech">
                      Tecnologias: {proyecto.tecnologias.join(", ")}
                    </p>

                    {estaExpandido && (
                      <div className="project-links" aria-live="polite">
                        <a href={proyecto.urlRepo} target="_blank" rel="noreferrer">
                          Ver repositorio
                        </a>
                        <a href={proyecto.urlDemo} target="_blank" rel="noreferrer">
                          Ver demo
                        </a>
                      </div>
                    )}

                    <button
                      type="button"
                      className="details-btn"
                      onClick={() => setProyectoExpandido(estaExpandido ? null : index)}
                    >
                      {estaExpandido ? "Ocultar detalles" : "Ver mas detalles"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section" id="contacto" aria-labelledby="contacto-titulo">
          <h2 id="contacto-titulo">Formulario de contacto</h2>
          <form className="contact-form" onSubmit={enviarFormulario} noValidate>
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              value={datosContacto.nombre}
              onChange={(event) => actualizarCampoContacto("nombre", event.target.value)}
              placeholder="Escribe tu nombre"
            />

            <label htmlFor="correo">Correo</label>
            <input
              id="correo"
              type="email"
              value={datosContacto.correo}
              onChange={(event) => actualizarCampoContacto("correo", event.target.value)}
              placeholder="nombre@correo.com"
            />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              value={datosContacto.mensaje}
              onChange={(event) => actualizarCampoContacto("mensaje", event.target.value)}
              placeholder="Deja un mensaje breve"
              rows={5}
            />

            <button type="submit" className="submit-btn">
              Enviar mensaje a {integranteActivo.nombreCorto}
            </button>
            {estadoContacto && <p className="form-status">{estadoContacto}</p>}
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>
          {anioActual} - GERALD ALVAREZ y JOSETH VARGAS.
        </p>
      </footer>
    </div>
  );
}

export default App;
