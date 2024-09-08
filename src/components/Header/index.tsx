// import React from 'react'

import './style.scss'

// sticky top-0 z-50 border-b transition-colors border-fd-foreground/10 bg-fd-background/60 backdrop-blur-md h-14

const Header = () => {
  return (
    <header className="  fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-3">
      <nav className="bg-slate-800 backdrop-blur-md flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center">
        <a className="header-nav-item" href="#Experiencia">
          Experiencia
        </a>
        <a className="header-nav-item" href="#Proyectos">
          Proyectos
        </a>
        <a className="header-nav-item" href="#Sobre-mi">
          Sobre mí
        </a>
        <a className="header-nav-item" href="#Contacto">
          Contacto
        </a>
      </nav>
    </header>
  )
}

export default Header
