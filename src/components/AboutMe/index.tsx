import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'

import ImageAbautMe from '@/assets/img/max-footer-picture-square.jpeg'

const AboutMe: React.FC = () => {
  return (
    <div className="max-w-5xl m-auto py-20">
      <section className="flex items-center text-3xl font-semibold text-gray-200 pb-16">
        <FontAwesomeIcon className="mr-4" icon={faUserCheck} />
        <h4>Sobre mí</h4>
      </section>
      {/* light:text-gray-700 */}
      <section className="flex flex-col items-center justify-center gap-8  text-gray-300 md:flex-row">
        {/* light:bg-black/20 */}
        {/* light:ring-black/70 */}
        <img
          className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl  bg-blue-800/5 ring-1 ring-white/20"
          width={'20%'}
          src={ImageAbautMe}
          alt=""
        />

        <div className="text-gray-300 [&>p]:mb-4 [&>p>strong]:text-blue-400 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 ">
          <p>
            Me llamo Max Aqquepucho. Empecé a conocer la programación cuando
            tenía 14 años por curiosidad. Años después, me di cuenta de que era
            lo mío. Actualmente, soy <strong>Desarrollador de Software</strong>{' '}
            con una pasión insaciable de generar impacto.
          </p>
          <p>
            Tengo algunos hobbies, como tocar el piano y la guitarra. Pertenecí
            a una banda de <strong> música latinoamericana,</strong> donde
            conocí a grandes artistas y tuve la oportunidad de compartir el
            escenario.
          </p>
          <p>
            Una pasión que descubrí hace poco es <strong>viajar en moto</strong>{' '}
            (en pandemia 😆). En estos últimos años, he recorrido gran parte de
            mi país y he tenido la oportunidad de conocer lugares increíbles.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutMe
