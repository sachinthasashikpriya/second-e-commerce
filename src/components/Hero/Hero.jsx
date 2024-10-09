import React from 'react'
import arrow_icon from '../assets/Assets/Frontend_Assets/arrow.png'
import hand_icon from '../assets/Assets/Frontend_Assets/hand_icon.png'
import hero_image from '../assets/Assets/Frontend_Assets/hero_image.png'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero'>
    <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
    
    <div className="hero-latest-btn">
        <div>Latest Collection </div>
        <img src={arrow_icon} alt="" />
    </div>
    </div>
    <div className="hero-right">
        <img src={hero_image} alt=""/>

    </div>
    </div>
  )
}
 