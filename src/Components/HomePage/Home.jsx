import React, { useState } from 'react'
import './Home.css'
import { FiMenu } from 'react-icons/fi'
import { motion } from 'framer-motion'
const Home = () => {
    const [opened, setopened] = useState(false)
    const [status, setStatus] = useState('')
    const show = () => {
        if (!opened) {
            setStatus('active');
            setopened(true)
        } else {
            setStatus('')
            setopened(false)
        }
    }

    const hide = () => {
            setStatus('')
            setopened(false)
    }
    return (
        <div className='home' id='home'>
            <header>
                <FiMenu className='menu' onClick={show} style={{transform: 'scale(2.5)'}} />
                <ul className={`${status}`}>
                    <li onClick={hide}><a href="#home">Inicio</a></li>
                    <li onClick={hide}><a href="#edex">Educación</a></li>
                    <li onClick={hide}><a href="#projects">Proyectos</a></li>
                    <li onClick={hide}><a href="#SR">Habilidades</a></li>
                    <li onClick={hide}><a href="#contact">Contacto</a></li>
                </ul>
            </header>
            <div className="top">
                <div className="left">
                    <div className="text">
                        <h1><span>Alex Matías</span> Argüello Ocampos</h1>
                        <p>Estudiante de Arquitectura | Especialista en Terminaciones Arquitectónicas</p>
                    </div>
                    <div className="info">
                        Soy Alex Matías Argüello Ocampos, estudiante de Arquitectura y profesional con experiencia en terminaciones de pintura, acabados arquitectónicos y supervisión de obras. Mi enfoque se basa en la calidad, la atención al detalle y la correcta ejecución de cada proyecto.
                    </div>
                    <motion.div
                        initial={{ transform: 'translateY(100%)', opacity:0 }}
                        animate={{  transform: 'translateY(0%)',opacity:1}}
                        transition={{type:'spring', duration: 3}}
                        className="quote">
                        <q>Como profesional, diseño con atención al detalle y compromiso con la calidad en cada terminación y acabado.</q>
                        <span>Alex Matías Argüello Ocampos</span>
                    </motion.div>
                </div>
                <div className="right">
                    <div className="image">
                        <img src='https://lh3.google.com/u/0/d/1ZqG4oaYNao92CFiFpOjlZED38uN8KcKZ=w1920-h942-iv1' alt="Alex Matías Argüello Ocampos" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home