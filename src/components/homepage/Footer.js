import React from 'react'
import { FiGithub } from "react-icons/fi"
import { IconContext } from "react-icons"

function Footer() {
  return (
    <footer className='w-full h-full font-semibold text-white bg-black py-4'>
        <div className='flex justify-center align-middle gap-3 w-auto h-full py-2'>
            <p className=''> &copy; 2023 - Ramandeep Singh</p>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle', fontSize: '1.5rem' } }}>
                <a href='https://github.com/RamanTheDeveloper' target='_blank'>
                    <FiGithub/>
                </a>
            </IconContext.Provider>
        </div>
    </footer>
  )
}

export default Footer