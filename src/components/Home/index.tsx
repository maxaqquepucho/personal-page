import React, { useRef, useEffect } from 'react'

//COMPONENTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BackgroundHome from '@/components/BackgroundHome'

import ExperienceItem from './components/ExperienceItem'

import AboutMe from '@/components/AboutMe'

import Header from '@/components/Header/index.tsx'

import SocialNetworks from '../SocialNetworks'

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

import PrfilePhoto from '@/assets/img/max-picture-square-optimized.jpg'

import './styles.scss'

const experienceList = [
  {
    title: 'Software Developer',
    company: 'Global66',
    date: '2019 - 2024 Agosto',
    description: `Comenzamos con 20 personas y llegamos a ser +280. He participado en diferentes equipos desarrollando las plataformas B2C y B2B utilizando tecnologías como Vue 3, Pinia, TypeScript y TailwindCSS. A la vez, la aplicación móvil en NativeScript para (Android/iOS).`,
  },
  {
    title: 'Full Stack Developer (freelance)',
    company: 'Softdynamic',
    date: '2019 Julio - 2019 Octubre ',
    description:
      'Ejecuté un proyecto para administrar los seguros de RIMAC, utilizando Vue.js con Vuex en el front-end y desarrollando una API en Laravel con una base de datos en PostgreSQL en el back-end.',
  },
]

const Home: React.FC = () => {
  const experienceRef = useRef<HTMLDivElement | null>(null)
  const aboutMeRef = useRef<HTMLDivElement | null>(null)

  const listItems = experienceList.map((experienceItem, index) => (
    <li key={index}>
      <ExperienceItem item={experienceItem} />
    </li>
  ))

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const path = window.location.hash
    const refToHash = {
      '#experience': experienceRef,
      '#about-me': aboutMeRef,
    }

    setTimeout(() => {
      if (Object.keys(refToHash).includes(path || '')) {
        // const ref = refToHash[path as keyof typeof refToHash]
        // scrollTo(ref)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        // window.history.replaceState(null, )
      }
    }, 800)
  }, [])

  return (
    <>
      <Header scrollExecution={scrollTo} refs={{ experienceRef, aboutMeRef }} />
      <main>
        <section className="relative overflow-hidden h-full">
          <BackgroundHome />

          <div className="px-4 relative  md:pt-28  backdrop-blur-sm">
            <section className="text-gray-300 flex flex-col-reverse md:flex-row justify-between m-auto max-w-5xl  pt-20">
              <div className="text-center md:text-left flex-grow max-w-2xl ">
                <h1 className="text-gray-200  text-4xl sm:text-5xl font-bold">
                  Hola, Soy Max <br /> Aqquepucho
                </h1>
                <p className="text-xl mt-6 text-gray-300 [&>strong]:text-blue-400">
                  +6 años de experiencia como{' '}
                  <strong>
                    Desarrollador de Software y apasionado por la tecnología.
                  </strong>{' '}
                  Tengo una curiosidad insaciable por crear, aprender y sobre
                  todo contribuir a nuestro planeta con <strong>Tech.</strong>
                </p>
                <SocialNetworks />
              </div>
              <div className="mb-6 md:mb-0 flex justify-center md:justify-end">
                <div className="profile-photo profile-border">
                  <i></i>
                  {/* light:opacity-5 */}
                  <div className="z-[-1] pointer-events-none absolute left-1/2 top-1/2 h-[261px] w-[261px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#000000] to-[#48279c]  mix-blend-normal blur-[30px] opacity-[0.15]"></div>
                  <img
                    className="z-20"
                    // width={'50%'}
                    src={PrfilePhoto}
                    alt="Max's profile photo"
                  />
                </div>
              </div>
            </section>
            <section ref={experienceRef} className="max-w-5xl m-auto pt-20">
              <div className="flex items-center text-3xl font-semibold text-gray-200">
                <FontAwesomeIcon className="mr-4" icon={faBriefcase} />
                <h3>Experiencia laboral</h3>
              </div>
              <ul className="py-16">{listItems}</ul>
            </section>
          </div>
        </section>

        <div
          ref={aboutMeRef}
          className=" px-4 about-me-home border-t border-gray-800"
        >
          <AboutMe />
        </div>
      </main>
    </>
  )
}

export default Home
