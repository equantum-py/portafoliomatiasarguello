import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar" aria-label="Navegación principal">
    <div className="navbar-container">
      <a className="navbar-logo" href="#inicio" aria-label="Inicio del portfolio de Alex Matías Argüello Ocampos">
        <span>Alex Matías</span> Argüello
      </a>
      <div className="nav-menu">
        <a href="#sobre-mi" className="nav-link">Sobre mí</a>
        <a href="#formacion" className="nav-link">Formación</a>
        <a href="#experiencia" className="nav-link">Experiencia</a>
        <a href="#proyectos" className="nav-link">Proyectos</a>
        <a href="#contacto" className="nav-link">Contacto</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
