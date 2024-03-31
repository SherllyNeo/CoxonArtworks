import React from 'react';
import '../../App.css';
import './About.css';


function About() {
    return (
        <div className='about'>
            <div classNAme='aboutContainer'>
                    <h1 style={{fontSize: 100, padding: 50}}> Elizabeth Coxon </h1>


                <div class="float-container">

                <div class="float-child">
                    <div align="right" style={{marginRight: 450 }}>
                    <img src="images/aboutMe.jpeg" alt="headshot" height="600" width="600" />
                </div>
                </div>

                <div class="float-child">
                    <div align="left">
                    <p style={{fontSize: 25, padding: 10}}> The upcoming artist Elizabeth Coxon, who was born in England in 2002, is a promising young artist who explores a variety of mediums and techniques in her work. </p>
                    <p style={{fontSize: 25, padding: 10}}>Her work includes printmaking, painting, and drawing, among other things. The artworks of Coxon are a variety of unique collections that she has developed over the course of her time in art. </p>
                    <p style={{fontSize: 25, padding: 10}}>The city of Leicester is where Elizabeth is now residing, and she is working towards earning a bachelor's degree in fine art. She takes an active role in the study and curation of her work, which is continually influenced by the natural world and the human body. </p>
                     <p style={{fontSize: 25, padding: 10}}>The usual viewpoints in the industry are challenged by her art as she investigates the use of colour and mediums in singular ways. She is always looking for new ways to combine traditional techniques with modern elements in her artwork, and she actively seeks out new ways to improve and progress her talents.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About
