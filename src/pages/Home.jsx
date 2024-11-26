import React from 'react'
import hero_image from '../assets/hero_image.png' 

function Home() {
  return (
    <div className='border justify-around flex'>
      
        <img className='h-[50vh]' src={hero_image} alt="" />
    </div>
  )
}

export default Home