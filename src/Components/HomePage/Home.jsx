import React from 'react';
import './Home.css';
import profileImage from '../../Assets/Images/pngtree-vector-business-men-icon-png-image_925963.jpg';

const services = [
  'Pintura Residencial',
  'Pintura Comercial',
  'Terminaciones Finas',
  'Revestimientos',
  'Supervisión de Obras',
  'Control de Calidad',
];

const skills = [
  'Terminaciones arquitectónicas',
  'Pintura profesional',
  'Control de ejecución',
  'Supervisión de obras',
  'Coordinación de personal',
  'Gestión de calidad en obra',
];

const Home = () => {
  const whatsappUrl = 'https://wa.me/595991246806?text=Hola%20Mat%C3%ADas%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto.';

  return (
    <main className="home">
      <section id="inicio" className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">ALEX COLOR PY</p>
          <h1>Alex Matías Argüello Ocampos</h1>
          <p className="hero-subtitle">
            Especialista en Terminaciones Arquitectónicas y Pintura Profesional
          </p>
          <p className="hero-description">
            Servicio profesional de pintura, terminaciones finas, supervisión de obras y control de calidad para proyectos residenciales y comerciales en Paraguay.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Solicitar Presupuesto
            </a>
            <a className="secondary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-image-card" aria-label="Foto profesional de Alex Matías Argüello Ocampos">
          <img src={profileImage} alt="Alex Matías Argüello Ocampos" />
        </div>
      </section>

      <section id="servicios" className="section services-section">
        <div className="section-heading">
          <p className="eyebrow">Servicios</p>
          <h2>Soluciones profesionales para terminaciones de obra</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service}>
              <span className="service-marker" />
              <h3>{service}</h3>
              <p>
                Ejecución ordenada, asesoramiento técnico y terminación cuidada para lograr resultados duraderos y prolijos.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="experiencia" className="section experience-section">
        <div className="experience-card featured">
          <p className="eyebrow">Experiencia destacada</p>
          <h2>Edificio Altamira</h2>
          <p>
            Participación en trabajos para el Ingeniero Carlos Pérez, con coordinación de personal, terminaciones finas y control de ejecución.
          </p>
        </div>
        <div className="experience-list">
          <div>
            <h3>Coordinación de personal</h3>
            <p>Organización de equipos de trabajo para mantener avances claros y procesos eficientes.</p>
          </div>
          <div>
            <h3>Control de calidad</h3>
            <p>Revisión de superficies, detalles, tiempos de ejecución y acabado final.</p>
          </div>
          <div>
            <h3>Formación técnica</h3>
            <p>Estudiante de Arquitectura, primer año universitario, egresado del Colegio Santa Rita de Cassia.</p>
          </div>
        </div>
      </section>

      <section className="section skills-section">
        <div className="section-heading">
          <p className="eyebrow">Habilidades</p>
          <h2>Capacidades aplicadas en cada proyecto</h2>
        </div>
        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="contacto" className="section contact-section">
        <h2>¿Necesitás un presupuesto para tu obra?</h2>
        <p>Contactá con ALEX COLOR PY para pintura profesional, terminaciones arquitectónicas y supervisión de calidad.</p>
        <a className="primary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Escribir al 0991 246 806
        </a>
      </section>
    </main>
  );
};

export default Home;
