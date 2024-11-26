import React from 'react'
import hero_image from '../../assets/hero_image.png' 
import hand from '../../assets/hand_icon.png'
import arrow from '../../assets/arrow.png'


function Hero() {
  return (
    <div className='flex justify-around h-[99vh] hero'>
      <div className='pb-8'>
        <p className='uppercase mt-20 text-xl font-semibold'>new arrivels only</p>
        <p className='text-4xl font-semibold flex'>new <img className='h-10 ml-2' src={hand} alt="" /></p>
        <p className='text-4xl font-semibold'>collections</p>
        <p className='text-4xl font-semibold'>for everyone</p>
        <button className='flex mt-8 p-4 font-semibold bg-red-500 text-emerald-200 rounded-3xl text-xl '>know more <img className='ml-8 m-2' src={arrow} alt="" /></button>
      </div>
      <div className='p-8'>
        <img className='h-[50vh]' src={hero_image} alt="" />
      </div>
    </div>


  )
}

export default Hero