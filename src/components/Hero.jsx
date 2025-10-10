import React from 'react'
import bgImage from '/public/tiger-bg.jpg' // ganti dengan path gambarmu

const Hero = () => {
  return (
    <section
      className="h-[85vh] flex flex-col justify-center px-20 text-white relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-6xl font-bold mb-4">Monitoring Harimau</h1>
      <p className="text-xl font-light">Pentingnya Melindungi Spesies demi Masa Depan Bumi</p>
    </section>
  )
}

export default Hero
