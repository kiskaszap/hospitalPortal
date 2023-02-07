import React from 'react'
import homePic from '../graphics/homePic.svg'

const Home = () => {
  return (
    <div className='homeMain'>
      <h1 className='homeH1'>
       Local Children Hospital where fun and health meet
      </h1>
      <img className='homePic' src={homePic} alt="homepicture" />
    </div>
  )
}

export default Home
