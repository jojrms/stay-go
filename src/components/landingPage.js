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
                        <span className='spanAboutUs'>About Us</span>
                        <h1>The best hotel <br/> provider for you</h1>    
                    </article>
                    <article>
                        <h2>StayGo is an application based online platform that provides the <br/> best hotel booking service with the best destinations in Indonesia</h2>
                        <div>
                            <span>
                                <h3>Hotels & Resorts</h3>
                                <h3>672+</h3>
                            </span>
                            <span>
                                <h3>Booking partnes</h3>
                                <h3>92+</h3>
                            </span>
                            <span>
                                <h3>Customer</h3>
                                <h3>50.125+</h3>
                            </span>
                        </div>
                    </article>
                </aside>
                <aside>
                    <img src='https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                    <img src='https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                    <img src='https://images.unsplash.com/photo-1583522862616-c7c405b9e0ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                    <img src='https://images.unsplash.com/photo-1583522862857-bd9f6d34a236?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                    <img src='https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                </aside>
                
            </section>

            <section className='sectionThree'>
                <img src='https://th.bing.com/th/id/OIP.qqAXLbEpsJTQZ0swSY3osAHaCB?pid=ImgDet&rs=1'/>
                <img src='https://th.bing.com/th/id/R.ecbe57d4fdedcd8ff984e88d1b4f369e?rik=27h%2buSsSoG6saQ&riu=http%3a%2f%2fwww.freelogovectors.net%2fwp-content%2fuploads%2f2019%2f01%2ftraveloka_logo.png&ehk=lwdKq2zYOaqkUkImbB5zg%2b0lj89HBzUwNeeFTjEcvCQ%3d&risl=&pid=ImgRaw&r=0'/>
                <img src='https://th.bing.com/th/id/OIP.EsNZbwsk2n5YHrIy-ruihwHaBk?pid=ImgDet&rs=1'/>
                <img src='https://th.bing.com/th/id/R.2badb0eabba4098b42783009ea4e0fa7?rik=m9%2bC4rfx6RFAyQ&pid=ImgRaw&r=0'/>
            </section>

            <section className='sectionFour'></section>
        </>
    )
}

export default LandingPage;