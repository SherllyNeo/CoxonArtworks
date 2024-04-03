import React, { useState } from 'react';
import './Contact.css'


const emailEmoji = <p className='contactDetail'> Email: <i class="fa fa-envelope"></i> </p>
const emailText = <p className='contactDetail'> Email: lizzy@CoxonArtworks.com </p> 

const instaEmoji =  <p className='contactDetail'> Instagram: <i class="fa-brands fa-instagram"></i> </p>
const instaText =   <p className='contactDetail'> Instagram: Coxon_Artworks </p>

function Contact() {

    const [buttonEmailText, setButtonEmailText] = useState(emailEmoji);
    const changeEmailText = () => setButtonEmailText(emailText)

    const [buttonInstaText, setButtonInstaText] = useState(instaEmoji);
    const changeInstaText = () => setButtonInstaText(instaText)

    return (
        <div className='contact'>
        <div className='contact-box'>
            <button onClick={changeEmailText}>{buttonEmailText}</button> 
            <button onClick={changeInstaText}>{buttonInstaText}</button> 
        </div>
        </div>
    )
}

export default Contact
