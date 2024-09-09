import React from 'react'

interface ExperienceItemProps {
  item: {
    title: string
    company: string
    date: string
    description: string
  }
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ item }) => {
  return (
    // light:before:border-black/20
    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2  before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4">
      <div className="relative pb-12 col-span-2">
        <div className="sticky top-0">
          {' '}
          <span className="text-blue-400 -left-[42px] absolute rounded-full text-5xl">
            •
          </span>{' '}
          <h3 className="text-xl font-bold text-blue-400">
            {item.title || ''}
          </h3>{' '}
          {/* light:text-gray-600 */}
          <h4 className="font-semibold text-xl text-white">
            {item.company || ''}
          </h4>{' '}
          {/* light:text-gray-600/80 */}
          <time className="p-0 m-0 text-sm  text-white/80">
            {item.date || ''}
          </time>{' '}
        </div>
      </div>
      {/* light:text-gray-600 */}
      <div className="relative flex flex-col gap-2 pb-4  text-gray-300 md:col-span-3">
        {' '}
        {item.description}{' '}
      </div>
    </div>
  )
}

export default ExperienceItem
