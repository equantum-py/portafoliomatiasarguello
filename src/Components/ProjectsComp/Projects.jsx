import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'
import { ProjectsData } from '../../ProjectsData'
import { motion } from 'framer-motion'

const Projects = () => {
  const transition = { type: 'spring', duration: 1.6 }
  const featuredProjects = ProjectsData.slice(0, 4)

  return (
    <div className="case-studies" aria-label="Proyectos y trabajos destacados">
      {featuredProjects.map((project, index) => (
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
              <span className="case-index">{String(index + 1).padStart(2, '0')}</span>
              <p className="case-kicker">Case Study</p>
              <h3>{project.name}</h3>
              <p className="case-description">{project.concept}</p>
            </div>

            <div className="case-role">
              <span>Rol desempeñado</span>
              <p>{project.role}</p>
            </div>

            <Link to={`/proyecto/${project.slug}`} className="case-button">
              Ver proyecto
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

export default Projects
