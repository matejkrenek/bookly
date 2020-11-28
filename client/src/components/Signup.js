import React from 'react'

export const Signup = () => {
    return (
    <div className="formSection">
        <div className="container column">
            <h2 className="titleSection">Welcome back</h2>
            <p className="ctaLink">Don't have an account yet? <a href="/login">Create an Account</a></p>
            <a className="googleAlt" href="/login"><i class="fab fa-google"></i> Login with Google</a>
            <div className="orLine__horizontal flexbox">
                <p>or</p>
            </div>
            <form className="userForm">
                <div className="fieldSection email">
                    <p className="errorMessage"></p>
                    <input type="email" name="email" />
                    <label for="email">E-mail</label>
                </div>
                <div className="fieldSection password">
                    <p className="errorMessage"></p>
                    <input type="password" name="password"/>
                    <label for="password">Password</label>
                </div>
                <div className="fieldSection agreement">
                    <input type="checkbox" name="agreement" id="agreement" />
                    <label for="agreement">Remember me</label>
                </div>
                <button className="btn blue">Login</button>
            </form>
        </div>
    </div>
    )
}
