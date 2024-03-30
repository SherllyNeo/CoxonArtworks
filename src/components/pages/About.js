import React from 'react';
import '../../App.css';
import './About.css';


function About() {
    return (
        <div className='about'>
        <div classNAme='aboutContainer'>
            <h1 style={{fontSize: 100, padding: 50}}> Elizabeth Coxon </h1>

            <div align="right" style={{marginRight: 450 }}>
            <img src="/images/headshot.jpg" alt="headshot" height="200" width="200" />
            </div>

            <div align="left">
            <p style={{fontSize: 50, padding: 50}}> I am an amitious artist looking to make an impact in the industry and explore new and exciting mediums of expression </p>
            <p style={{fontSize: 50, padding: 50}}> I love to make stuff </p>
            </div>
        </div>
        </div>
    )
}

export default About
