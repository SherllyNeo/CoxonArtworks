import React from 'react';
import Button from './button.js';
import '../App.css';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
        <h1> Elizabeth Coxon </h1>
        <p> Explore her recent work  </p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Latest projects
            </Button>
        </div>

        </div>
    )
}

export default HeroSection
