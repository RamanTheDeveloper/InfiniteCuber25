import React from 'react'

function Homepage() {

    const bg_img = require('../images/homepage/rubiks-cube-background.png')

  return (
    <>
        <div className='w-full h-max bg-gradient-to-r from-gray-500 to-gray-500 z-30'>
            <img src={bg_img} alt="background" className='bg-center bg-no-repeat bg-cover flex items-center justify-center h-full relative'/>
            <div className='z-30 absolute flex justify-center align-middle text-white font-medium text-lg animate-fade'>
                <h1>Welcome Cuber</h1>
            </div>
        </div>
    </>
  )
}

export default Homepage