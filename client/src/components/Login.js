import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
    <div className="formSection">
        <div className="container column">
            <h2 className="titleSection">Welcome back</h2>
            <p className="ctaLink">Don't have an account yet? <Link to="/signup">Create an Account</Link></p>
            <Link className="googleAlt" to="/login"><i className="fab fa-google"></i> Login with Google</Link>
            <div className="orLine__horizontal flexbox">
                <p>or</p>
            </div>
            <form className="userForm">
                <div className="fieldSection email">
                    <p className="errorMessage"></p>
                    <input type="email" name="email" />
                    <label htmlFor="email">E-mail</label>
                </div>
                <div className="fieldSection password">
                    <p className="errorMessage"></p>
                    <input type="password" name="password"/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="fieldSection agreement">
                    <input type="checkbox" name="agreement" id="agreement" />
                    <label htmlFor="agreement">Remember me</label>
                </div>
                <button className="btn blue">Login</button>
            </form>
        </div>
    </div>
    )
}
