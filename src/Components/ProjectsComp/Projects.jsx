import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'
import { ProjectsData } from '../../ProjectsData'
import { motion } from 'framer-motion'

const Projects = () => {
  const transition = { type: 'spring', duration: 2 }

  return (
    <div className="case-studies">
      {ProjectsData.map((project, index) => {
        const photosCount = project.photos?.length || 0
        const videosCount = project.videos?.length || 0

        return (
          <motion.article
            initial={{ transform: 'translateY(48px)', opacity: 0 }}
            whileInView={{ transform: 'translateY(0)', opacity: 1 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ ...transition, delay: index * 0.04 }}
            className={`case-card ${index === 0 ? 'featured' : ''}`}
            key={project.id}
          >
            <Link to={`/proyecto/${project.slug}`} className="case-image" aria-label={`Ver proyecto ${project.name}`}>
              {project.videos?.[0] && !project.photos?.[0] ? (
                <video src={project.cover} muted playsInline preload="metadata" />
              ) : (
                <img src={project.cover} alt={project.name} />
              )}
            </Link>

            <div className="case-content">
              <div className="case-index">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <p className="case-kicker">Case Study</p>
                <h3>{project.name}</h3>
                <p className="case-description">{project.concept}</p>
              </div>
              <div className="case-role">
                <span>Participación</span>
                <p>{project.role}</p>
              </div>
              <div className="case-meta" aria-label="Contenido del proyecto">
                <span>{photosCount} fotos</span>
                <span>{videosCount} videos</span>
              </div>
              <Link to={`/proyecto/${project.slug}`} className="case-button">
                Ver proyecto
              </Link>
            </div>
          </motion.article>
        )
      })}
    </div>
  )
}

export default Projects
