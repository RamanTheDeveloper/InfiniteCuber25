import React from 'react'

function Homepage() {

    const bg_img = require('../images/homepage/rubiks-cube-background.png')

  return (
    <>
        <div className='w-full h-full flex justify-center align-middle bg-gradient-to-r from-gray-500 to-gray-500 z-30'>
            <img src={bg_img} alt="background" className='bg-center bg-no-repeat bg-cover absolute z-10 '/>
            <div className='z-30 w-full h-full flex justify-center align-middle text-white font-medium text-6xl lg:translate-y-[30rem]'>
                <h1 className='w-full h-full text-center align-middle animate-fade-text'>Welcome Cuber</h1>
            </div>
        </div>
    </>
  )
}

export default Homepage