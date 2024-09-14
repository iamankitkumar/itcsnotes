import React from 'react'
// import './Hero.css'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1 className='hero-title'>Welcome to our website</h1>
            <p className='hero-subtitle'>The University of Mumbai (known earlier as University of Bombay)
             is one of the oldest and premier  Universities in India.It was established in 1857 consequent 
             upon “Wood’s Education Dispatch”, and it is one amongst the first three Universities in India</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero