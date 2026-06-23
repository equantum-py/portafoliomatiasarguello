himport React from 'react';
import './Home.css';
import profileImage from '../../Assets/Images/matias-arguello.jpg';
import projectImage from '../../Assets/Images/Screenshot.png';
import resumePdf from '../../Assets/Resume/Resume.pdf';

const whatsappUrl = 'https://wa.me/595991246806?text=Hola%20Mat%C3%ADas%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20tu%20experiencia%20profesional.';

const education = [
  {
    institution: 'Colegio Santa Rita de Cassia',
    detail: 'Formación escolar',
  },
  {
    institution: 'UPAP – Arquitectura',
    detail: 'Primer año universitario',
  },
];

const experiences = [
  {
    title: 'Edificio Altamira',
    subtitle: 'Trabajo para el Ingeniero Carlos Pérez',
    items: ['Terminaciones arquitectónicas', 'Supervisión de personal', 'Control de calidad', 'Seguimiento de obra', 'Coordinación de trabajos'],
  },
  {
    title: 'Alex Color PY',
    subtitle: 'Experiencia empresarial y marca personal',
    items: ['Dirección operativa', 'Gestión de proyectos', 'Atención a clientes', 'Terminaciones y pintura profesional'],
  },
];

const projects = [
  {
    title: 'Edificio Altamira',
    description: 'Proyecto de referencia en terminaciones finas y control de ejecución de obra.',
    responsibilities: 'Supervisión de personal, seguimiento de obra, coordinación de trabajos y revisión de terminaciones.',
    result: 'Acompañamiento técnico para lograr acabados prolijos y estándares consistentes de calidad.',
    image: projectImage,
  },
  {
    title: 'Terminaciones Finas',
    description: 'Proyecto placeholder documentado para representar trabajos reales de acabado arquitectónico.',
    responsibilities: 'Preparación de superficies, revisión de detalles y control visual de terminaciones.',
    result: 'Mejora de presentación final y cuidado de detalles constructivos.',
    image: profileImage,
  },
  {
    title: 'Pintura Arquitectónica',
    description: 'Proyecto placeholder para trabajos de pintura profesional desarrollados mediante Alex Color PY.',
    responsibilities: 'Planificación de tareas, coordinación del equipo y control del resultado final.',
    result: 'Aplicación ordenada con enfoque en prolijidad, durabilidad y limpieza de entrega.',
    image: projectImage,
  },
  {
    title: 'Revestimientos y Acabados de Obra',
    description: 'Proyecto placeholder para futuras obras documentadas de revestimientos y acabados.',
    responsibilities: 'Seguimiento de ejecución, control de calidad y coordinación de etapas de terminación.',
    result: 'Proceso de obra más organizado y terminaciones alineadas al objetivo del proyecto.',
    image: profileImage,
  },
];

const skills = [
  'Supervisión de Obra',
  'Control de Calidad',
  'Coordinación de Personal',
  'Terminaciones Arquitectónicas',
  'Pintura Profesional',
  'Gestión de Equipos',
  'Lectura de Planos',
  'Seguimiento de Proyectos',
];

const Home = () => (
  <main className="portfolio-home">
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <p className="eyebrow">Portfolio profesional</p>
        <h1>Alex Matías Argüello Ocampos</h1>
        <p className="hero-subtitle">
          Estudiante de Arquitectura<br />
          Especialista en Terminaciones Arquitectónicas
        </p>
        <p className="hero-description">
          Soy estudiante de Arquitectura y profesional especializado en terminaciones arquitectónicas, supervisión de obras y control de calidad.
        </p>
        <p className="hero-description">
          Actualmente desarrollo proyectos mediante Alex Color PY, aplicando experiencia práctica en construcción y acabados de obra.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#experiencia">Ver Experiencia</a>
          <a className="secondary-button" href="#proyectos">Ver Proyectos</a>
          <a className="secondary-button" href={resumePdf} download>Descargar CV</a>
          <a className="text-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
      <div className="hero-photo-card">
        <img src={profileImage} alt="Alex Matías Argüello Ocampos" />
      </div>
    </section>

    <section id="sobre-mi" className="section about-section">
      <div className="section-heading">
        <p className="eyebrow">Sobre mí</p>
        <h2>Perfil profesional en desarrollo arquitectónico</h2>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Alex Matías Argüello Ocampos combina formación académica en Arquitectura con experiencia práctica en obra, especialmente en terminaciones, pintura profesional y control de calidad.
          </p>
          <p>
            Su perfil se orienta al desarrollo profesional dentro del ámbito constructivo, con atención al detalle, organización de equipos y seguimiento responsable de cada etapa de terminación.
          </p>
        </div>
        <div className="about-highlight">
          <span>Arquitectura</span>
          <span>Terminaciones</span>
          <span>Obra</span>
          <span>Calidad</span>
        </div>
      </div>
    </section>

    <section id="formacion" className="section education-section">
      <div className="section-heading">
        <p className="eyebrow">Formación académica</p>
        <h2>Base educativa y carrera universitaria</h2>
      </div>
      <div className="timeline">
        {education.map((item) => (
          <article className="timeline-card" key={item.institution}>
            <span className="timeline-dot" />
            <h3>{item.institution}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>

    <section id="experiencia" className="section experience-section">
      <div className="section-heading">
        <p className="eyebrow">Experiencia profesional</p>
        <h2>Obras, coordinación y marca personal</h2>
      </div>
      <div className="experience-grid">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.title}>
            <p className="card-subtitle">{experience.subtitle}</p>
            <h3>{experience.title}</h3>
            <ul>
              {experience.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>

    <section id="proyectos" className="section projects-section">
      <div className="section-heading">
        <p className="eyebrow">Portfolio de proyectos</p>
        <h2>Showcase de experiencia y responsabilidades</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <strong>Responsabilidades</strong>
              <p>{project.responsibilities}</p>
              <strong>Resultado</strong>
              <p>{project.result}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section id="habilidades" className="section skills-section">
      <div className="section-heading">
        <p className="eyebrow">Habilidades</p>
        <h2>Competencias aplicadas en obra</h2>
      </div>
      <div className="skills-list">
        {skills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
    </section>

    <section id="alex-color-py" className="section business-section">
      <div className="business-card">
        <p className="eyebrow">Experiencia Empresarial</p>
        <h2>Alex Color PY</h2>
        <p>
          Alex Color PY es una iniciativa enfocada en pintura profesional, terminaciones arquitectónicas y acabados de obra. Forma parte del recorrido profesional de Matías como experiencia empresarial y marca personal.
        </p>
      </div>
    </section>

    <section id="contacto" className="section contact-section">
      <h2>¿Te interesa conocer más sobre mi experiencia profesional?</h2>
      <div className="contact-actions">
        <a className="primary-button" href={resumePdf} download>Descargar CV</a>
        <a className="secondary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a className="text-button" href="https://www.facebook.com/search/top?q=Alex%20Color%20PY" target="_blank" rel="noopener noreferrer">Ver Facebook</a>
      </div>
    </section>
  </main>
);

export default Home;
