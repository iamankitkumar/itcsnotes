import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className="about">
        {/* left parts */}
        <div className="about-left">
            <img src={about_img} alt=""  className='about-img'/>
            <img src={play_icon} alt=""  className='play-icon' onClick={()=>{setPlayState(true)}}/>

        </div>
        {/* Right part */}
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Naturing  Tomorrow's Leader Toady</h2>
            <p>
Read More…

Upcoming Events
Department of Commerce: Organising Seminar on 20th July 2024 on Implementation of Commerce, 
Management,Accounts and Economics Practicum in Education in the Context of NEP 2020.</p>
            <p>Department of Law: Invitation – Conference on " India's Progressive path in Administration of Criminal Justice System" on 30th June, 2024.</p>
            <p>Department of Philosophy: 03 days Online Workshop on The Philosophical Foundations of Indian Knowledge System.</p>
        </div>

    </div>
  )
}

export default About