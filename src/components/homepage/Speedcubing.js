import React from 'react'

function Speedcubing() {

  const feliksImg = require('../images/homepage/feliks.png')

  return (
    <>
      <div className='w-full h-auto flex flex-row bg-black gap-5 px-4'>
        <div className='w-34 h-30'>
          <img src={feliksImg} alt="Feliks Zemdegs" />
        </div>
        <div className='text-white flex flex-col w-[30rem] gap-3 p-3'>
          <h1 className='text-xl font-bold'>What is speedcubing?</h1>
          <p>Speedcubing refers to solving the Rubik’s cube and a variety of other combinations and twisty puzzles in the fastest time possible. It’s described as an art, science, and sport and is sometimes called speedsolving. It entails performing a series of moves to alter a scrambled puzzle into a state where every face of the puzzle is a single solid color. <br /><br />
          Want to learn more about the Rubik's cube?</p>
          <a href="#" className='border-2 rounded-lg w-auto h-auto'>Learn more</a>
        </div>
      </div>
    </>
  )
}

export default Speedcubing