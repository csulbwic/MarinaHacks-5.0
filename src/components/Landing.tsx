import React from 'react'
import Image from 'next/image'
import style from '../styles/landing.module.css'
import { CountdownTimer } from './CountdownTimer'

export const Landing = () => {
  return (
    <div id="landing" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating bubbles */}
        <div className="absolute top-20 left-10 w-8 h-8 bg-pink-200/30 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-purple-200/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-blue-200/30 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '2.5s'}}></div>
        <div className="absolute bottom-20 right-10 w-10 h-10 bg-pink-300/30 rounded-full animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}></div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center space-y-8 z-10">
        {/* Logo with enhanced animation */}
        <div className="relative group">
          <div className={`${style.sharkImage} ${style.sharkAnimation} hover:scale-105 transition-transform duration-300`}>
            <Image 
              src="/images/logos_4.0/MarinaHacks_Logo_4.0_Pallete.png"
              alt='MarinaHacks 5.0 Logo'
              width={550}
              height={550}
              className="drop-shadow-2xl"
            />
          </div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 rounded-full blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Countdown Timer */}
        <div className="mt-8">
          <CountdownTimer targetDate="2024-10-26T11:00:00" />
        </div>

        {/* Additional text */}
        <div className="text-center space-y-4 mt-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            MarinaHacks 5.0
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Dive into Innovation
          </p>
        </div>
      </div>
    </div>
  )
}