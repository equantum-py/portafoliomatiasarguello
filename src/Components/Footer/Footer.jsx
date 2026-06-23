import React from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const message = 'Hola Matías, vi tu portfolio y me gustaría conocer más sobre tu experiencia profesional.';
  const whatsappUrl = `https://wa.me/595991246806?text=${encodeURIComponent(message)}`;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h2>Alex Matías Argüello Ocampos</h2>
          <p>Estudiante de Arquitectura</p>
          <p>Alex Color PY</p>
        </div>
        <div className="footer-contact">
          <p>WhatsApp: <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">0991 246 806</a></p>
          <p>Facebook: <a href="https://www.facebook.com/search/top?q=Alex%20Color%20PY" target="_blank" rel="noopener noreferrer">Alex Color PY</a></p>
          <div className="footer-icons">
            <a href="https://www.facebook.com/search/top?q=Alex%20Color%20PY" target="_blank" rel="noopener noreferrer" aria-label="Facebook Alex Color PY"><FaFacebookF /></a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de Alex Matías Argüello"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <p className="copy">© 2026 Alex Matías Argüello Ocampos</p>
    </footer>
  );
};

export default Footer;
