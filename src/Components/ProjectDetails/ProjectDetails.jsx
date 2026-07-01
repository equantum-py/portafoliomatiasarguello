import React, { useEffect } from 'react'
import './ProjectDetails.css'
import { ProjectsData } from '../../ProjectsData'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProjectDetails = () => {
  const { nombre } = useParams()
  const decodedName = decodeURIComponent(nombre || '')
  const chosenProj = ProjectsData.find((project) => project.name === decodedName)

  useEffect(() => {
    window.sessionStorage.setItem('opened', true)
    window.scrollTo(0, 0)
  }, [])

  if (!chosenProj) {
    return (
      <main className="projectData project-not-found">
        <p className="detail-eyebrow">Proyecto</p>
        <h1>No se encontró el proyecto solicitado.</h1>
        <Link to="/#proyectos" className="detail-link">Volver a proyectos</Link>
      </main>
    )
  }

  const gallery = chosenProj.media || []
  const heroMedia = gallery[0]
  const supportingMedia = gallery.slice(1)
  const poster = chosenProj.photos?.[0]?.src
  const projectMeta = [
    { icon: '▦', label: 'Proyecto', value: chosenProj.name },
    { icon: '⌖', label: 'Ubicación', value: 'No especificada' },
    { icon: '◇', label: 'Rol', value: chosenProj.role },
    { icon: '✓', label: 'Estado', value: 'Documentado' },
    { icon: '◌', label: 'Tipo de trabajo', value: chosenProj.responsibilities?.[0] || 'Trabajo de obra' },
  ]

  return (
    <main className="projectData">
      <nav className="project-top-nav" aria-label="Navegación del proyecto">
        <Link to="/#proyectos" className="detail-back">← Volver a Proyectos</Link>
      </nav>

      <section className="project-hero">
        <div className="project-hero-media">
          {heroMedia?.type === 'video' ? (
            <video src={heroMedia.src} controls playsInline preload="metadata" poster={poster} />
          ) : (
            <img src={chosenProj.cover} alt={chosenProj.name} loading="lazy" />
          )}
        </div>
        <motion.div
          initial={{ transform: 'translateY(36px)', opacity: 0 }}
          animate={{ transform: 'translateY(0)', opacity: 1 }}
          transition={{ type: 'spring', duration: 1.6 }}
          className="project-hero-content"
        >
          <p className="detail-eyebrow">Case Study</p>
          <h1>{chosenProj.name}</h1>
          <p>{chosenProj.concept}</p>

          <dl className="project-meta">
            {projectMeta.map((item) => (
              <div className="project-meta-item" key={item.label}>
                <dt><span aria-hidden="true">{item.icon}</span>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </section>

      <section className="project-overview" aria-label="Resumen profesional del proyecto">
        <article>
          <span>Descripción</span>
          <p>{chosenProj.explain}</p>
        </article>
        <article>
          <span>Mi participación</span>
          <p>{chosenProj.role}</p>
        </article>
        <article>
          <span>Resultado</span>
          <p>{chosenProj.result}</p>
        </article>
      </section>

      <section className="project-responsibilities">
        <p className="detail-eyebrow">Responsabilidades</p>
        <h2>Ejecución, supervisión y calidad en obra.</h2>
        <ul>
          {chosenProj.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </section>

      <section className="project-gallery" aria-label={`Galería editorial de ${chosenProj.name}`}>
        {supportingMedia.map((item, index) => (
          <figure className={`${index % 4 === 0 ? 'wide' : index % 4 === 1 ? 'tall' : ''} ${item.type === 'video' ? 'video-card' : ''}`.trim()} key={`${item.name}-${index}`}>
            {item.type === 'video' ? (
              <video src={item.src} controls playsInline preload="metadata" poster={poster} />
            ) : (
              <img src={item.src} alt={`${chosenProj.name} ${index + 2}`} loading="lazy" />
            )}
          </figure>
        ))}
      </section>
    </main>
  )
}

export default ProjectDetails
