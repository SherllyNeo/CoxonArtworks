import React from 'react';
import Button from './button.js';
import '../App.css';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
        <h1> Cool art here </h1>
        <p> Buy my shit </p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Explore art!
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH ART 
            </Button>
        </div>

        </div>
    )
}

export default HeroSection
