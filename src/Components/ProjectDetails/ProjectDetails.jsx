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
  const photosCount = chosenProj.photos?.length || 0
  const videosCount = chosenProj.videos?.length || 0
  const heroMedia = gallery[0]
  const supportingMedia = gallery.slice(1)

  return (
    <main className="projectData">
      <section className="project-hero">
        <div className="project-hero-media">
          {heroMedia?.type === 'video' ? (
            <video src={heroMedia.src} controls playsInline preload="metadata" />
          ) : (
            <img src={chosenProj.cover} alt={chosenProj.name} fetchPriority="high" />
          )}
        </div>
        <motion.div
          initial={{ transform: 'translateY(36px)', opacity: 0 }}
          animate={{ transform: 'translateY(0)', opacity: 1 }}
          transition={{ type: 'spring', duration: 2 }}
          className="project-hero-content"
        >
          <Link to="/#proyectos" className="detail-back">← Proyectos</Link>
          <p className="detail-eyebrow">Case Study</p>
          <h1>{chosenProj.name}</h1>
          <p>{chosenProj.concept}</p>
        </motion.div>
      </section>

      <section className="project-overview">
        <article>
          <span>Participación</span>
          <p>{chosenProj.role}</p>
        </article>
        <article>
          <span>Material visual</span>
          <p>{photosCount} fotos · {videosCount} videos</p>
        </article>
        <article>
          <span>Enfoque</span>
          <p>{chosenProj.explain}</p>
        </article>
      </section>

      <section className="project-statement">
        <p className="detail-eyebrow">Desarrollo</p>
        <h2>Una mirada de obra, ejecución y detalle.</h2>
        <p>{chosenProj.explain}</p>
      </section>

      <section className="project-process">
        <article>
          <span>Responsabilidades</span>
          <ul>
            {chosenProj.responsibilities.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article>
          <span>Proceso</span>
          <p>{chosenProj.process}</p>
        </article>
        <article>
          <span>Resultado</span>
          <p>{chosenProj.result}</p>
        </article>
      </section>

      <section className="project-gallery" aria-label={`Galería de ${chosenProj.name}`}>
        {supportingMedia.map((item, index) => (
          <figure className={index % 5 === 0 ? 'wide' : ''} key={`${item.name}-${index}`}>
            {item.type === 'video' ? (
              <video src={item.src} controls playsInline preload="metadata" />
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
