import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
          const phoneNumber = '0991246806';
          const message = 'Hola Matias';
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

          return (
                      <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whatsapp-button"
                                    title="Contactar por WhatsApp"
                                  >
                            <span>WhatsApp</span>span>
                      </a>a>
                    );
};

export default WhatsAppButton;</a>
