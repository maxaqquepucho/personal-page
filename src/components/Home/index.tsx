import React from 'react'

//COMPONENTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BackgroundHome from '@/components/BackgroundHome'
import ExperienceItem from './components/ExperienceItem'
import AboutMe from '@/components/AboutMe'

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

import PrfilePhoto from '@/assets/img/max-picture-square-optimized.jpg'

import './styles.scss'

const experienceList = [
  {
    title: 'Software Developer',
    company: 'BairesDev',
    date: '2020 - present',
    description:
      'I work as a full stack developer, developing web applications and APIs for different clients using technologies such as React, Angular, NodeJS, Express, among others.',
  },
  {
    title: 'Software Developer',
    company: 'Freelance',
    date: '2019 - 2020',
    description:
      'I worked as a freelance developer, developing web applications for different clients using technologies such as React, NodeJS, Express, among others.',
  },
]

const listItems = experienceList.map((experienceItem, index) => (
  <li key={index}>
    <ExperienceItem item={experienceItem} />
  </li>
))

const Home: React.FC = () => {
  return (
    <>
      <main>
        <section className="relative overflow-hidden h-full">
          <BackgroundHome />
          <div className="relative mt-28  backdrop-blur-sm">
            <section className="text-gray-300 flex flex-col-reverse md:flex-row justify-between m-auto max-w-5xl py-20">
              <div className="flex-grow max-w-2xl ">
                <p className="text-gray-200 text-5xl font-bold">
                  Hola, Soy Max <br /> Aqquepucho
                </p>
                <p className="text-xl mt-6 dark:text-gray-300 [&>strong]:text-blue-400">
                  +6 years experience.{' '}
                  <strong>
                    Software developer and passionate about technology.
                  </strong>{' '}
                  I have an insatiable curiosity for creating, learning and
                  above all contributing to our planet.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="profile-photo profile-border">
                  <i></i>
                  <div className="z-[-1] pointer-events-none absolute left-1/2 top-1/2 h-[261px] w-[261px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#000000] to-[#48279c] opacity-5 mix-blend-normal blur-[30px] dark:opacity-[0.15]"></div>
                  <img
                    className="z-20"
                    // width={'50%'}
                    src={PrfilePhoto}
                    alt="Foto de max"
                  />
                </div>
              </div>
            </section>
            <div className="max-w-5xl m-auto mt-10">
              <section className="flex items-center text-3xl font-semibold text-gray-200">
                <FontAwesomeIcon className="mr-4" icon={faBriefcase} />
                <h3>Work experience</h3>
              </section>
              <ul className="py-16">{listItems}</ul>
            </div>
          </div>
        </section>
        <div className="about-me-home border-t border-gray-800">
          <AboutMe  />
        </div>
      </main>
    </>
  )
}

export default Home
