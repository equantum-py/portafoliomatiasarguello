import React from 'react';
import './Home.css';

const Home = () => {
        return (
                  <div className="home">
                        {/* HERO SECTION */}
                        <section className="hero">
                                <div className="hero-container">
                                          <div className="hero-content">
                                                      <h1 className="hero-title">
                                                                    <span className="highlight">ALEX MATÍAS ARGÜELLO OCAMPOS</span>span>
                                                      </h1>h1>
                                                      <p className="hero-subtitle">Soluciones Profesionales en Terminaciones Arquitectónicas, Pintura y Supervisión de Obras</p>p>
                                          
                                                      <div className="hero-services">
                                                                    <div className="service-tag">Terminaciones Arquitectónicas</div>div>
                                                                    <div className="service-tag">Pintura Profesional</div>div>
                                                                    <div className="service-tag">Supervisión de Obras</div>div>
                                                      </div>div>
                                          
                                                      <div className="hero-cta">
                                                                    <button className="btn btn-primary">Solicitar Presupuesto</button>button>
                                                                    <a href="https://wa.me/0991246806" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                                                                    Contactar por WhatsApp
                                                                    </a>a>
                                                      </div>div>
                                          </div>div>
                                
                                          <div className="hero-image">
                                                      <div className="hero-placeholder">
                                                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                                                                                    <path d="M50,100 L150,100 M100,50 L100,150" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                                                                    </svg>svg>
                                                      </div>div>
                                          </div>div>
                                </div>div>
                        </section>section>
                  
                        {/* SERVICIOS SECTION */}
                        <section id="servicios" className="servicios">
                                <div className="servicios-container">
                                          <h2 className="section-title">Nuestros Servicios</h2>h2>
                                          <p className="section-subtitle">Soluciones completas para tus proyectos</p>p>
                                
                                          <div className="servicios-grid">
                                                      <div className="servicio-card">
                                                                    <div className="servicio-icon">🎨</div>div>
                                                                    <h3>Pintura Residencial</h3>h3>
                                                                    <p>Acabados de alta calidad para viviendas particulares con atención al detalle</p>p>
                                                      </div>div>
                                          
                                                      <div className="servicio-card">
                                                                    <div className="servicio-icon">🏢</div>div>
                                                                    <h3>Pintura Comercial</h3>h3>
                                                                    <p>Proyectos comerciales y empresariales con máximos estándares profesionales</p>p>
                                                      </div>div>
                                          
                                                      <div className="servicio-card">
                                                                    <div className="servicio-icon">🔨</div>div>
                                                                    <h3>Terminaciones Arquitectónicas</h3>h3>
                                                                    <p>Acabados integrales para proyectos de construcción y remodelación</p>p>
                                                      </div>div>
                                          
                                                      <div className="servicio-card">
                                                                    <div className="servicio-icon">📐</div>div>
                                                                    <h3>Revestimientos</h3>h3>
                                                                    <p>Instalación de revestimientos decorativos y funcionales</p>p>
                                                      </div>div>
                                          
                                                      <div className="servicio-card">
                                                                    <div className="servicio-icon">👷</div>div>
                                                                    <h3>Supervisión de Obra</h3>h3>
                                                                    <p>Control de calidad y supervisión integral de tus proyectos</p>p>
                                                      </div>div>
                                          
                                                      <div className="servicio-card">
                                                                    <div className="servicio-icon">✓</div>div>
                                                                    <h3>Control de Calidad</h3>h3>
                                                                    <p>Inspección rigurosa para garantizar excelencia en cada proyecto</p>p>
                                                      </div>div>
                                          </div>div>
                                </div>div>
                        </section>section>
                  
                        {/* EXPERIENCIA SECTION */}
                        <section id="experiencia" className="experiencia">
                                <div className="experiencia-container">
                                          <h2 className="section-title">Experiencia Profesional</h2>h2>
                                
                                          <div className="experiencia-card">
                                                      <div className="exp-header">
                                                                    <h3 className="exp-proyecto">Edificio Altamira</h3>h3>
                                                                    <span className="exp-tipo">Proyecto Emblemático</span>span>
                                                      </div>div>
                                                      <div className="exp-content">
                                                                    <div className="exp-item">
                                                                                    <strong>Terminaciones Arquitectónicas</strong>strong>
                                                                                    <p>Trabajos de acabado integral en estructuras de hormigón y detalles arquitectónicos</p>p>
                                                                    </div>div>
                                                                    <div className="exp-item">
                                                                                    <strong>Pintura Profesional</strong>strong>
                                                                                    <p>Aplicación de sistemas de pintura de alta durabilidad y acabado premium</p>p>
                                                                    </div>div>
                                                                    <div className="exp-item">
                                                                                    <strong>Control de Calidad</strong>strong>
                                                                                    <p>Supervisión exhaustiva de procesos y cumplimiento de especificaciones técnicas</p>p>
                                                                    </div>div>
                                                                    <div className="exp-item">
                                                                                    <strong>Supervisión de Personal</strong>strong>
                                                                                    <p>Coordinación y dirección de equipos de trabajo para garantizar puntualidad y calidad</p>p>
                                                                    </div>div>
                                                      </div>div>
                                          </div>div>
                                </div>div>
                        </section>section>
                  
                        {/* CTA SECTION */}
                        <section id="contacto" className="cta-section">
                                <div className="cta-container">
                                          <h2>¿Listo para mejorar tu proyecto?</h2>h2>
                                          <p>Contacta con nosotros para una consulta sin compromiso</p>p>
                                          <a href="https://wa.me/0991246806" className="btn btn-primary">
                                                      Contactar Ahora
                                          </a>a>
                                </div>div>
                        </section>section>
                  </div>div>
                );
};

export default Home;</div>
