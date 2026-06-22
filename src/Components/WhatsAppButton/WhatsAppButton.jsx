import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const phoneNumber = '0991246806';
    const message = encodeURIComponent('Hola Matías, vi tu portfolio y me gustaría solicitar un presupuesto.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
          <a 
                  href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
                  className="whatsapp-button"
                  title="Contactar por WhatsApp"
                >
                <svg 
                          viewBox="0 0 24 24" 
                  width="24" 
                  height="24" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                        >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>path>
                </svg>svg>
          </a>a>
        );
};

export default WhatsAppButton;</a>
