import React from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const message = 'Hola Matías, vi tu portfolio y me gustaría solicitar un presupuesto.';
  const whatsappUrl = `https://wa.me/595991246806?text=${encodeURIComponent(message)}`;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h2>ALEX COLOR PY</h2>
          <p>Servicio Profesional de Pintura</p>
        </div>
        <div className="footer-contact">
          <p>WhatsApp: <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">0991 246 806</a></p>
          <p>Facebook: <a href="https://www.facebook.com/search/top?q=Alex%20Color%20PY" target="_blank" rel="noopener noreferrer">Alex Color PY</a></p>
          <div className="footer-icons">
            <a href="https://www.facebook.com/search/top?q=Alex%20Color%20PY" target="_blank" rel="noopener noreferrer" aria-label="Facebook Alex Color PY"><FaFacebookF /></a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ALEX COLOR PY"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <p className="copy">© 2026 ALEX COLOR PY</p>
    </footer>
  );
};

export default Footer;
