import React from 'react'
import * as FaIcon from 'react-icons/fa'
import * as AiIcon from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

function InfoCards() {
  return (
    <>
        <div className='w-full my-[10rem]'>
          <div className='flex flex-row gap-16 justify-center align-middle px-5'>
            <IconContext.Provider value={{size:"30px"}}>
            <div className='w-[20rem] h-max flex flex-col gap-3 border-2 border-solid rounded-lg shadow-md p-4'>
              <div className='flex flex-row gap-3'>
                <FaIcon.FaCubes/>
                <p className='text-2xl font-bold pb-2'>Cubing Resources</p>
              </div>
              <p>This website has cubing resources where you can find all the necessary information about cubing whether you're a beginner or an advanced cuber. I will link other websites as well as relevant YouTube video's so you don't have to go looking for them.</p>
            </div>

            <div className='w-[20rem] h-max flex flex-col gap-3 border-2 border-solid rounded-lg shadow-md p-4'>
              <div className='flex flex-row gap-3'>
                <AiIcon.AiFillFileText/>
                <p className='text-2xl font-bold pb-2'>Handy Algorithms</p>
              </div>
              <p>
                Under the Algorithms tab, you can find all the algs for all WCA puzzles including a downloadable sheet. The algs will have explainations wherever necessary.
              </p>
            </div>

            <div className='w-[20rem] h-max flex flex-col gap-3 border-2 border-solid rounded-lg shadow-md p-4'>
              <div className='flex flex-row gap-3'>
                <AiIcon.AiFillFolder/>
                <p className='text-2xl font-bold pb-2'>Documenting My Journey</p>
              </div>
              <p>
              I will be documenting my cubing journey as I progress as a cuber. This will consist of all the barriers I break as well as new tricks I learned along the way. Trying to share my knowledge with fellow cubers.
              </p>
            </div>
            </IconContext.Provider>
          </div>
        </div>
    </>
  )
}

export default InfoCards