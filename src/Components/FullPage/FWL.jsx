import React from 'react'
import Footer from '../Footer/Footer'
import EDEX from '../EDEX/EDEX'
import Heading from '../Heading/Heading'
import Home from '../HomePage/Home'
import Projects from '../ProjectsComp/Projects'
import SR from '../SkillsAndResume/SR'
const FWL = () => {
  return (
      <>
        <Home />
        <Heading head='Educación y Experiencia' id="edex"/>
    <EDEX />
        <Heading head='Proyectos' id="projects" />
      <Projects />
        <Heading head='Habilidades' id='SR' />
      <SR />
      <Footer />
      </>
  )
}

export default FWL


