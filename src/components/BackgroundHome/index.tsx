import React from 'react'

// interface BackgroundProps {
//   // Define the props for your component here
// }

import './style.scss'

const BackgroundHome: React.FC = () => {
  // Implement your component logic here

  return (
    // JSX code for your component's UI goes here
    <>
    {/* light: opacity-50  */}
      <span className="sidebar__right-lights opacity-100"></span>
    {/* light: opacity-50  */}
      <span className="sidebar__left_lights opacity-100"></span>

      <span className="absolute left-0 top-[20vh] h-[50vh] w-full bg-gradient-to-b  to-transparent from-black"></span>
      {/* light:from-white */}
      <span className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t  to-transparent from-black"></span>
      {/* light:from-white */}
      <div className="bg-container-home" style={{ perspective: '1000px' }}>
        <div
          className="absolute inset-0 z-[100] [--gradient-stop-1:0px] [--gradient-stop-2:50%]"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0) 0px, var(--geist-foreground) 75%)',
          }}
        ></div>
        <div className="bg-rotate-home">
          <div className="bg-square-lines-home dark-bg-home"></div>
        </div>
      </div>
    </>
  )
}

export default BackgroundHome
