import React from 'react'
// import './Hero.css'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1 className='hero-title'>🌟 Hello and Welcome! 🌟</h1>
            <p className='hero-subtitle'>We’re excited to have you here at your dedicated resource center! This space is designed to support your academic journey with a wealth of materials and tools to help you succeed.
📚 Extensive Study Materials: Explore a rich collection of notes and resources tailored to a variety of subjects. Whether you’re diving into core concepts or exploring advanced topics, we’ve got the materials you need.

🔍 Exam Preparation Tools: Find valuable study aids and past papers to guide your exam preparation. Gain insights into key topics and build your confidence for the big day.</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero