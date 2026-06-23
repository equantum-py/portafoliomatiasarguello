import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '595991246806';
  const message = 'Hola Matías, vi tu portfolio y me gustaría solicitar un presupuesto.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      title="Contactar por WhatsApp"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
};

export default WhatsAppButton;
