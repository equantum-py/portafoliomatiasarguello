import React from 'react';
import { motion } from 'framer-motion';
import './FeaturedWorks.css';

// Import first image from each folder
import edificioImage from '../../Assets/Trabajos/Edificio Alcántara/WhatsApp Image 2026-07-01 at 12.41.03.jpeg';
import obraImage from '../../Assets/Trabajos/Obra Altavida/WhatsApp Image 2026-07-01 at 12.32.34.jpeg';

const FeaturedWorks = () => {
  const works = [
    {
      id: 1,
      number: '01',
      title: 'Edificio Alcántara',
      role: 'Supervisor de Obra',
      description:
        'Supervisión de ejecución, control de calidad y coordinación operativa durante el desarrollo de la obra.',
      year: '2024',
      location: 'Asunción',
      type: 'Residencial',
      image: edificioImage,
      aspectRatio: 'vertical',
    },
    {
      id: 2,
      number: '02',
      title: 'Obra Altavida',
      role: 'Supervisor Operativo',
      description:
        'Gestión operativa integral de obra. Supervisión de trabajos en terminaciones. Coordinación de equipos.',
      year: '2025',
      location: 'Asunción',
      type: 'Obra residencial',
      image: obraImage,
      aspectRatio: 'panoramic',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.1,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className="featured-works-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="featured-works-container">
        {works.map((work, index) => (
          <motion.article
            key={work.id}
            className={`featured-work-block featured-work-block--${work.id} featured-work-block--${work.aspectRatio}`}
            variants={containerVariants}
          >
            {/* Image container */}
            <motion.div className="featured-work-image" variants={imageVariants}>
              <img src={work.image} alt={work.title} loading="lazy" />
              <div className="featured-work-overlay">
                <span>Ver proyecto →</span>
              </div>
            </motion.div>

            {/* Content container */}
            <motion.div className="featured-work-content" variants={contentVariants}>
              <div className="featured-work-header">
                <h2 className="featured-work-title">{work.title}</h2>
                <p className="featured-work-role">{work.role}</p>
              </div>

              <p className="featured-work-description">{work.description}</p>

              <div className="featured-work-meta">
                <span>{work.year}</span>
                <span>{work.location}</span>
                <span>{work.type}</span>
              </div>

              <motion.a href="#proyectos" className="primary-button" variants={buttonVariants}>
                Ver proyecto →
              </motion.a>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturedWorks;
