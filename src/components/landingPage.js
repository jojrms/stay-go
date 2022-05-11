/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const LandingPage = () => {

    return(
        <>
            <header>
                <i/>
                <ul>
                    <li>About Us</li>
                    <li>Explore</li>
                    <li>Booking</li>
                    <li>Contact</li>
                </ul>
                <button id='btnSignIn'>Sign In</button>
                <button id='btnRegister'>Register</button>
                <span>
                    <img src="https://img.icons8.com/color/48/000000/usa-circular.png"/>
                </span>
            </header>

            <section className='sectionOne'>
                <h1>Find the best place to <br/> stress release</h1>
                <div className='divBook'>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>    
                    </div>
                    <button></button>
                </div>
            </section>
        </>
    )
}

export default LandingPage;