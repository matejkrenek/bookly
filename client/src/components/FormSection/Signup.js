import React from 'react';
import { Link } from 'react-router-dom';
import './formSection.css'

export const Signup = () => {
    return (
        <div className="formSection">
        <div className="container column">
            <h2 className="titleSection">Start your journey on Bookly</h2>
            <p className="ctaLink">I already have account. <Link to="/login">Log in</Link></p>
            <Link className="googleAlt" to="/signup"><i className="fab fa-google"></i> Sign up with Google</Link>
            <div className="orLine__horizontal flexbox">
                <p>or</p>
            </div>
            <form className="userForm">
                <div className="fieldSection username">
                    <p className="errorMessage"></p>
                    <input type="text" name="username" />
                    <label htmlFor="username">User name</label>
                </div>
                <div className="fieldSection email">
                    <p className="errorMessage"></p>
                    <input type="text" name="email" />
                    <label htmlFor="email">E-mail</label>
                </div>
                <div className="fieldSection password">
                    <p className="errorMessage"></p>
                    <input type="password" name="password"/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="fieldSection agreement">
                    <input type="checkbox" name="agreement" id="agreement"/>
                    <label htmlFor="agreement">Creating an account means you’re okay with our <Link to="#">Terms of Service</Link>,
                        <Link to="#">Privacy Policy</Link>, and our default <Link to="#">Notification Settings</Link>.</label>
                </div>
                <button className="btn blue">Sign up</button>
            </form>
        </div>
    </div>
    )
}
