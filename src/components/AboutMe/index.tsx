import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'

import ImageAbautMe from '@/assets/img/max-footer-picture-square.jpeg'

const AboutMe: React.FC = () => {
  return (
    <div className="max-w-5xl m-auto py-20">
      <section className="flex items-center text-3xl font-semibold text-gray-200 pb-10">
        <FontAwesomeIcon className="mr-4" icon={faUserCheck} />
        <h4>Sobre mí</h4>
      </section>

      <section className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
        <img
          className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-blue-800/5 ring-1 ring-black/70 dark:ring-white/20 "
          width={'20%'}
          src={ImageAbautMe}
          alt=""
        />

        <div className="text-gray-300 [&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-blue-400 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 ">
          <p>
            Me llamo Max Aqquepucho. Empecé a conocer la programación cuando
            tenía 14 años por curiosidad. Años después, me di cuenta de que era
            lo mío. Actualmente, soy <strong>Desarrollador de Software</strong>{' '}
            y mi industria favorita.         
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem nemo ea at quae est officia rem recusandae fugit
            optio iste. Ex repellendus, fugiat alias quasi soluta nulla fugit
            nam placeat?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem nemo ea at quae est officia rem recusandae fugit
            optio iste. Ex repellendus, fugiat alias quasi soluta nulla fugit
            nam placeat?
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutMe
