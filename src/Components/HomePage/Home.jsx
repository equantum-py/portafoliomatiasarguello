import React from 'react';
import {
  FaFacebookF,
  FaHardHat,
  FaPeopleCarry,
  FaProjectDiagram,
  FaRulerCombined,
  FaWhatsapp,
} from 'react-icons/fa';
import {
  FiBriefcase,
  FiCheckCircle,
  FiDownload,
  FiLayers,
  FiMap,
  FiShield,
  FiUsers,
} from 'react-icons/fi';
import './Home.css';
import profileImage from '../../Assets/Images/matias-arguello.jpg';
import resumePdf from '../../Assets/Resume/MATIAS ARGUELLO - 2026.pdf';

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

const profilePillars = [
  {
    title: 'Organización',
    description: 'Planificación y seguimiento claro de actividades.',
    icon: <FiLayers />,
  },
  {
    title: 'Calidad',
    description: 'Control y revisión de trabajos, materiales y acabados.',
    icon: <FiShield />,
  },
  {
    title: 'Trabajo en equipo',
    description: 'Coordinación con cuadrillas, personal y proveedores.',
    icon: <FiUsers />,
  },
  {
    title: 'Supervisión de obra',
    description: 'Acompañamiento operativo en campo y control de ejecución.',
    icon: <FaHardHat />,
  },
];

const currentWork = {
  company: 'C.P. Pintura',
  role: 'Encargado Operativo / Supervisor de Trabajos',
  summary: 'Actualmente se desempeña como encargado operativo y supervisor de trabajos, coordinando tareas, supervisando la ejecución y asegurando la calidad en cada proyecto.',
  functions: [
    'Coordinación de cuadrillas.',
    'Supervisión de ejecución.',
    'Control de calidad.',
    'Seguimiento de cronogramas.',
    'Atención operativa de proyectos.',
  ],
};

const experiences = [
  {
    title: 'Experiencia en Obra',
    subtitle: 'Supervisión, coordinación y ejecución',
    icon: <FaProjectDiagram />,
    items: [
      'Supervisión de trabajos en diferentes etapas de la obra.',
      'Coordinación de personal y control de tareas diarias.',
      'Control de calidad y cumplimiento de tiempos.',
      'Lectura operativa de planos y seguimiento en campo.',
    ],
  },
  {
    title: 'Gestión y Marca Personal',
    subtitle: 'Dirección operativa de proyectos',
    icon: <FaPeopleCarry />,
    items: [
      'Gestión operativa de trabajos y recursos.',
      'Atención a clientes y asesoramiento.',
      'Planificación y organización de equipos.',
      'Seguimiento de entregas y resultados.',
    ],
  },
];

const projects = [
  {
    title: 'Edificio Altamira',
    description: 'Participación en obra, control de ejecución y coordinación de trabajos.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Interiores Contemporáneos',
    description: 'Ejecución y supervisión de trabajos en espacios interiores.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Pintura Profesional',
    description: 'Trabajos de pintura en viviendas y locales comerciales.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Revestimientos y Acabados',
    description: 'Colocación, revisión y control de detalles finales de obra.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80',
  },
];

const skills = [
  { title: 'Lectura de planos', detail: 'Interpretación y análisis de documentación.', icon: <FiMap /> },
  { title: 'Control de calidad', detail: 'Revisión de procesos y materiales.', icon: <FiCheckCircle /> },
  { title: 'Gestión de equipos', detail: 'Liderazgo y coordinación de personal.', icon: <FiUsers /> },
  { title: 'Planificación', detail: 'Organización de tareas y recursos.', icon: <FaRulerCombined /> },
  { title: 'Seguimiento de obra', detail: 'Control de avances, tiempos y resultados.', icon: <FiBriefcase /> },
];

const tools = ['AutoCAD', 'SketchUp', 'Microsoft Office'];

const Home = () => (
  <main className="portfolio-home">
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <p className="eyebrow">Perfil profesional</p>
        <h1>Alex Matías Argüello Ocampos</h1>
        <p className="hero-subtitle">Estudiante de Arquitectura</p>
        <p className="hero-description">
          Formación académica en arquitectura combinada con experiencia práctica en obra, coordinación y control de ejecución.
        </p>
        <p className="hero-description">
          Mi enfoque está en la organización, los detalles constructivos y el trabajo en equipo para lograr resultados de calidad.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#experiencia">Ver Experiencia</a>
          <a className="secondary-button" href="#proyectos">Ver Proyectos</a>
          <a className="secondary-button" href={resumePdf} download><FiDownload /> Descargar CV</a>
          <a className="secondary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a>
        </div>
      </div>
      <div className="hero-photo-card">
        <img src={profileImage} alt="Alex Matías Argüello Ocampos" />
      </div>
    </section>

    <section id="sobre-mi" className="section about-section">
      <div className="about-intro">
        <div className="section-heading">
          <p className="eyebrow">Sobre mí</p>
          <h2>Perfil profesional</h2>
          <p>Estudiante de arquitectura con interés en el desarrollo profesional dentro del ámbito de la construcción.</p>
          <p>Me destaco por la responsabilidad, el compromiso y la atención al detalle en cada etapa del proceso constructivo.</p>
        </div>
        <div className="profile-pillars">
          {profilePillars.map((pillar) => (
            <article className="pillar-card" key={pillar.title}>
              <span>{pillar.icon}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="formacion" className="section education-work-section">
      <article className="education-card">
        <p className="eyebrow"><FiLayers /> Formación académica</p>
        <div className="timeline">
          {education.map((item) => (
            <div className="timeline-item" key={item.institution}>
              <span />
              <div>
                <h3>{item.institution}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
      <article className="current-work-card">
        <div>
          <p className="eyebrow"><FiBriefcase /> Mi presente laboral</p>
          <h2>{currentWork.company}</h2>
          <h3>{currentWork.role}</h3>
          <p>{currentWork.summary}</p>
          <ul>
            {currentWork.functions.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="cp-mark" aria-hidden="true">CP<span>Pintura</span></div>
      </article>
    </section>

    <section id="experiencia" className="section experience-section">
      <div className="section-heading compact-heading">
        <p className="eyebrow">Experiencia en Obra y Gestión</p>
      </div>
      <div className="experience-grid">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.title}>
            <span className="experience-icon">{experience.icon}</span>
            <div>
              <p className="card-subtitle">{experience.subtitle}</p>
              <h3>{experience.title}</h3>
              <ul>{experience.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section id="proyectos" className="section projects-section">
      <div className="section-heading compact-heading">
        <p className="eyebrow">Proyectos y Trabajos Destacados</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section id="habilidades" className="section skills-tools-section">
      <div className="skills-panel">
        <p className="eyebrow">Habilidades</p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.title}>
              <span>{skill.icon}</span>
              <div>
                <h3>{skill.title}</h3>
                <p>{skill.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="tools-panel">
        <p className="eyebrow">Herramientas</p>
        <div>{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
      </div>
    </section>

    <section id="contacto" className="section contact-section">
      <div>
        <h2>¿Hablamos sobre tu próximo proyecto?</h2>
        <p>Estoy disponible para colaborar en nuevos desafíos.</p>
      </div>
      <div className="contact-actions">
        <a className="primary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a className="secondary-button" href={resumePdf} download>Descargar CV</a>
        <a className="secondary-button" href="https://www.facebook.com/search/top?q=Alex%20Color%20PY" target="_blank" rel="noopener noreferrer"><FaFacebookF /> Ver Facebook</a>
      </div>
    </section>
  </main>
);

export default Home;
