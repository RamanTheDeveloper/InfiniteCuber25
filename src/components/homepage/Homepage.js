import React from 'react'

function Homepage() {

    const bg_img = require('../images/homepage/rubiks-cube-background.png')

  return (
    <>
        <div className='w-full h-screen flex justify-center align-middle z-30 bg-gradient-to-b from-black to-black-100'>
            <h1 className='text-white z-30 font-bold text-5xl text-center w-auto h-auto animate-fade-text lg:translate-y-[30rem] md:translate-y-[15rem]'>Welcome Cuber</h1>
            <img src={bg_img} alt="background" className='bg-center bg-no-repeat bg-cover absolute z-10 mix-blend-overlay'/>
        </div>
        
    </>
  )
}

export default Homepage