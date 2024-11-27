import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/BackgroundBeamsWithCollision'
import  MagicButton  from './ui/MagicButton'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { FaLocationArrow } from 'react-icons/fa'

function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <TextGenerateEffect words='Code Create Collaborate' />
            <h2 className='text-3xl uppercase tracking-widest text-center text-color max-w-100'>
              Junior web developer
            </h2>
            <p className='text-center md:tracking-wider mb-4 text-sm md:text-large lg:text-2xl'>
              Hi, I&apos;m Michele Di Stadio
            </p>
            <a href="#Projects">
              <MagicButton title="Show my work" icon={<FaLocationArrow />} position='right' />
            </a>
          </div>
        </div>
    </BackgroundBeamsWithCollision>
  )
}

export default Hero
