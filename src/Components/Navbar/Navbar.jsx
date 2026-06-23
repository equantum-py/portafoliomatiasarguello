import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar" aria-label="Navegación principal">
    <div className="navbar-container">
      <a className="navbar-logo" href="#inicio" aria-label="ALEX COLOR PY inicio">
        <span>ALEX</span> COLOR PY
      </a>
      <div className="nav-menu">
        <a href="#inicio" className="nav-link">Inicio</a>
        <a href="#servicios" className="nav-link">Servicios</a>
        <a href="#experiencia" className="nav-link">Experiencia</a>
        <a href="#contacto" className="nav-link">Contacto</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
