import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'
import { ProjectsData } from '../../ProjectsData'
import { motion } from 'framer-motion'

const Projects = () => {
  const transition = { type: 'spring', duration: 1.6 }

  return (
    <div className="case-studies" aria-label="Proyectos y trabajos destacados">
      {ProjectsData.map((project, index) => {
        const mainResponsibilities = project.responsabilidades?.slice(0, 3) || []

        return (
          <motion.article
            initial={{ transform: 'translateY(42px)', opacity: 0 }}
            whileInView={{ transform: 'translateY(0)', opacity: 1 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ ...transition, delay: index * 0.05 }}
            className="case-card"
            key={project.id}
          >
            <Link to={`/proyecto/${project.slug}`} className="case-image" aria-label={`Ver proyecto ${project.name}`}>
              <img src={project.cover} alt={project.name} loading="lazy" />
            </Link>

            <div className="case-content">
              <div className="case-heading">
                <div className="case-topline">
                  <span className="case-index">{String(index + 1).padStart(2, '0')}</span>
                  <p className="case-kicker">Case Study</p>
                </div>

                <h3>{project.name}</h3>

                <div className="case-badges" aria-label="Datos principales del proyecto">
                  <span>{project.tipo}</span>
                  <span>{project.estado}</span>
                </div>
              </div>

              <div className="case-meta-grid">
                <div>
                  <span>Ubicación</span>
                  <strong>{project.ubicacion}</strong>
                </div>
                <div>
                  <span>Rol</span>
                  <strong>{project.rol}</strong>
                </div>
              </div>

              <p className="case-description">{project.descripcion}</p>

              <ul className="case-responsibilities">
                {mainResponsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>

              <div className="case-footer">
                <div className="case-media-counts" aria-label="Material disponible">
                  <span>{project.photos.length} fotos</span>
                  <span>{project.videos.length} videos</span>
                </div>

                <Link to={`/proyecto/${project.slug}`} className="case-button">
                  Ver proyecto
                </Link>
              </div>
            </div>
          </motion.article>
        )
      })}
    </div>
  )
}

export default Projects
