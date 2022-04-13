import React from 'react'

function Navbar() {

  const logo = require('../images/navbar/infinitecuber25-logo-cropped.JPG')


  return (
    <div className='sticky flex flex-row justify-center align-middle flex-wrap bg-black w-full h-24 z-20 py-2 px-2'>
      <a href='/#'><img src={logo} alt="Logo" className='w-[145px] h-[76px] cursor-pointer absolute left-20'/></a>
      <ul className='flex justify-center align-middle list-none text-center pt-6'>
        <li><a href='/#' className='m-8 text-white decoration-none text-base font-semibold uppercase hover:text-black hover:bg-white hover:rounded-2xl hover:px-6 hover:py-2 hover:transition-all ease-in-out duration-300'>Tutorials</a></li>
        <li><a href="/#" className='m-8 text-white decoration-none text-base font-semibold uppercase hover:text-black hover:bg-white hover:rounded-2xl hover:px-6 hover:py-2 hover:transition-all ease-in-out duration-300'>Algorithms</a></li>
        <li><a href="/#" className='m-8 text-white decoration-none text-base font-semibold uppercase hover:text-black hover:bg-white hover:rounded-2xl hover:px-6 hover:py-2 hover:transition-all ease-in-out duration-300'>Notation</a></li>
        <li><a href="/#" className='m-8 text-white decoration-none text-base font-semibold uppercase hover:text-black hover:bg-white hover:rounded-2xl hover:px-6 hover:py-2 hover:transition-all ease-in-out duration-300'>About me</a></li>
        <li><a href="/#" className='m-8 text-white decoration-none text-base font-semibold uppercase hover:text-black hover:bg-white hover:rounded-2xl hover:px-6 hover:py-2 hover:transition-all ease-in-out duration-300'>Contact me</a></li>
      </ul>
    </div>
  )
}

export default Navbar