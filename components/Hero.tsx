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
            <h2 className='uppercase tracking-widest text-xs text-center dark:text-blue-100 max-w-80'>
              I&apos;m a software engineer and a designer
            </h2>
            <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Build your next project with Next.js' />
            <p className='text-center md:tracking-wider mb-4 text-sm md:text-large lg:text-2xl'>
              Hi, I&apos;m Michele Di Stadio
            </p>
            <a href="#about">
              <MagicButton title="Show my work" icon={<FaLocationArrow />} position='right' />
            </a>
          </div>
        </div>
    </BackgroundBeamsWithCollision>
  )
}

export default Hero
