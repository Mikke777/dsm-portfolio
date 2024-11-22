import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='w-full max-w-4xl mx-auto pt-10 pb-0 mb-0 border-t border-card' id="contact">
      <div className='w-full left-0 '>
        <div className='w-full max-w-4xl mx-auto px-4'>
          <div className='flex justify-between xs:flex-col xs:text-center sm:flex-col sm:text-center md:flex-row'>
            <div>
            <h2 className='md:text-left'>Michele Di Stadio</h2>
            <p className='md:text-left'>Junior Frontend Developer</p>
          </div>
          <div className='xs:text-center sm:text-center'>
            <h2>Socials:</h2>
            <ul className='flex justify-center space-x-4'>
              <li>
                <a href='https://www.linkedin.com/in/michele-di-stadio/' target='_blank' className='rounded-full cursor-pointer'>
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href='https://github.com/Mikke777' target='_blank' className='rounded-full cursor-pointer'>
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
          <div className='flex justify-between mt-10 xs:flex-col xs:text-xs sm:flex-col sm:text-sm md:flex-row md:text-base'>
            <div>
              <p className='text-color text-center mt-1 mb-0'>
                © 2021 Michele Di Stadio. All rights reserved.
              </p>
            </div>
            <div>
              <p className='text-color text-center mt-1 mb-0'>
               Built with Next.js, React, Framer Motion, TailwindCSS, and ♥️
             </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
