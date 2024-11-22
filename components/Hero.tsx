import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/BackgroundBeamsWithCollision'

function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-center text-black">
          Hi, I&apos;m Michele Di Stadio
        </h1>
        <p className="text-lg text-center text-black">
          I&apos;m a software engineer and a designer
        </p>
      </div>
    </BackgroundBeamsWithCollision>
  )
}

export default Hero
