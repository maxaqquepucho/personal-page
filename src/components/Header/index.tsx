import React from 'react'

import './style.scss'

// sticky top-0 z-50 border-b transition-colors border-fd-foreground/10 bg-fd-background/60 backdrop-blur-md h-14
interface HeaderProps {
  scrollExecution: (ref: React.RefObject<HTMLDivElement>) => void
  refs: {
    experienceRef: React.RefObject<HTMLDivElement>
    aboutMeRef: React.RefObject<HTMLDivElement>
  }
}

const Header: React.FC<HeaderProps> = ({ scrollExecution, refs }) => {
  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2 sm:mt-3">
      <nav className="bg-slate-800 backdrop-blur-md flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center">
        <a
          onClick={() => scrollExecution(refs.experienceRef)}
          className="header-nav-item"
          href="#experience"
        >
          Experiencia
        </a>
        <a className="px-1 cursor-not-allowed text-gray-600" href="#Proyectos">
          Proyectos (Soon 😎)
        </a>
        <a
          onClick={() => scrollExecution(refs.aboutMeRef)}
          className="header-nav-item"
          href="#about-me"
        >
          Sobre mí
        </a>
        {/* <a className="header-nav-item" href="#Contacto">
          Contacto
        </a> */}
      </nav>
    </header>
  )
}

export default Header
