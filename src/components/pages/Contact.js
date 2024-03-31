import React, { useState } from 'react';
import '../../App.css';


const emailEmoji = <div className='contact'> <p style={{fontSize: 50, padding: 50}}> Email: <i class="fa fa-envelope"></i> </p> </div>;
const emailText = <div className='contact'> <p style={{fontSize: 50, padding: 50}}> Email: Elizabeth.Coxon@CoxonArtworks.com </p> </div>;

const instaEmoji = <div className='contact'> <p style={{fontSize: 50, padding: 50}}> Instagram: <i class="fa-brands fa-instagram"></i> </p> </div>;
const instaText =  <div className='contact'> <p style={{fontSize: 50, padding: 50}}> Instagram: elizabeth.coxon </p> </div>;

function Contact() {

    const [buttonEmailText, setButtonEmailText] = useState(emailEmoji);
    const changeEmailText = () => setButtonEmailText(emailText)

    const [buttonInstaText, setButtonInstaText] = useState(instaEmoji);
    const changeInstaText = () => setButtonInstaText(instaText)

    return (
        <>
        <div className='contact'>
            <button onClick={changeEmailText}>{buttonEmailText}</button> 
            <button onClick={changeInstaText}>{buttonInstaText}</button> 
        </div>
        </>
    )
}

export default Contact
