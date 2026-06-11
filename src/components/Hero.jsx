import React from 'react'

const Hero = ({ children }) => {
  return (
    <div>
      <section className='herosection flex items-center justify-center min-h-[600px] relative'>
        <div className='absolute inset-0'>
          <img src="/images/herobanner.png" alt="Hero banner" className='object-cover w-full h-full' />
        </div>
        <div className='relative z-10 text-center text-white'>
          {children}
        </div>
      </section>
    </div>
  )
}

export default Hero