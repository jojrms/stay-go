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
                        <span>
                            <div className='divImage'/>
                            <div>
                                <h3>Where do you want to stay?</h3>
                                <select>
                                    <option>Lombok, NTB</option>
                                </select>
                            </div>
                        </span>
                        <span>
                            <div className='divImage'/>
                            <div>
                                <h3>Check In - Check Out</h3>
                                <input type='date'/>
                            </div>
                        </span>
                        <span>
                            <div className='divImage'/>
                            <div>
                                <h3>Where do you want to stay?</h3>
                                <select>
                                    <option>1 Room, 1 Guests</option>
                                    <option selected>1 Room, 2 Guests</option>
                                    <option >1 Room, 3 Guests</option>
                                    <option >2 Room, 1 Guests</option>
                                    <option >2 Room, 2 Guests</option>
                                    <option >2 Room, 3 Guests</option>
                                </select>
                            </div>
                        </span>    
                    </div>
                    <button></button>
                </div>

                <span className='spanTextDecoration'>StayGo</span>

                <span id='spanMobile'/>

                <div className='divDecorations'>
                    <i/>
                    <i/>
                    <i/>
                    <span>
                        <img src='https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                        <p>NTB</p>
                    </span>
                    <i/>
                    <span>
                        <img src='https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80'/>
                        <p>Raja Ampat</p>
                    </span>
                </div>

                <span className='spanGlobo'/>

            </section>

            <section className='sectionTwo'>
                <aside>
                    <article>
                        <span>About Us</span>
                        <h1>The best hotel <br/> provider for you</h1>    
                    </article>
                    <article>
                        
                    </article>
                </aside>
                
            </section>
        </>
    )
}

export default LandingPage;