import React from 'react'

function Homepage() {

    const bg_img = require('../images/homepage/infinitecuber25-logo-bg.jpg')

  return (
    <>
        <div className='w-full h-screen flex justify-center align-middle z-30'>
            <img src={bg_img} alt="background" className='bg-center bg-no-repeat bg-cover absolute z-10 mix-blend-overlay'/>
        </div>
        
    </>
  )
}

export default Homepage