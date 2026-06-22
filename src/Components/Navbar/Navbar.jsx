import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
          <nav className="navbar">
                <div className="navbar-container">
                        <Link to="/" className="navbar-logo">
                                  <img src={require('../../Assets/logo-alex-color.png')} alt="ALEX COLOR PY" className="logo-img" />
                                  <span className="logo-text">ALEX COLOR PY</span>span>
                        </Link>Link>
                        <div className="nav-menu">
                                  <Link to="/" className="nav-link">Inicio</Link>Link>
                                  <a href="#servicios" className="nav-link">Servicios</a>a>
                                  <a href="#experiencia" className="nav-link">Experiencia</a>a>
                                  <a href="#contacto" className="nav-link">Contacto</a>a>
                        </div>div>
                </div>div>
          </nav>nav>
        );
};

export default Navbar;</nav>
