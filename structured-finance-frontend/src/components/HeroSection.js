import React from 'react'
import './App.css'
import {Button} from './Navbar/Button'
import './HeroSection.css'

function HeroSection(){
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Ready to launch your career in Structured Finance? </h1>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get Started!
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;