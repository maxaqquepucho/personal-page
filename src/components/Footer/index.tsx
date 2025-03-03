import React from 'react'

import './style.scss'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className=" text-gray-400 pt-20 pb-10 text-sm text-center  bg-footer">
        <p>
          © {currentYear} Max Aqquepucho. <br /> Todos los derechos reservados.{' '}
        </p>
      </footer>
    </>
  )
}

export default Footer
