import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './formSection.css'
import { Redirect } from 'react-router-dom'
import { isAuth } from '../../helpers/auth';
import { authenticate, isAuth } from '..../helpers/auth'

export const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        agreement: false
    })

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        agreement: ""
    })

    const { username, email, password, agreement } = formData;

    const handleChange = text => e => {
        console.log(username, email, password, agreement)
        setFormData({...formData, [text]: e.target.value })
    }

    const handleCheck = text => e => {
        console.log(agreement)
        setFormData({...formData, [text]: e.target.checked })
    }

    const onSubmit = (e) => {
        e.preventDefault()
    
        axios.post('/signup', formData)
            .then(response => console.log(response))
            .catch(async (err) => {
                const errorsObject = err.response.data
                setErrors({...errorsObject})
            })
    }

    return (
        <div className="formSection">
        <div className="container column">
            {isAuth() ? <Redirect to="/"/> : null}
            <h2 className="titleSection">Start your journey on Bookly</h2>
            <p className="ctaLink">I already have account. <Link to="/login">Log in</Link></p>
            <Link className="googleAlt" to="/signup"><i className="fab fa-google"></i> Sign up with Google</Link>
            <div className="orLine__horizontal flexbox">
                <p>or</p>
            </div>
            <form className="userForm" onSubmit={onSubmit}>
                <div className={errors.username.length > 0 ? "fieldSection username error" : "fieldSection username"}>
                    <p className="errorMessage">{errors.username}</p>
                    <input type="text" name="username" 
                    className={username.length > 0 ? 'focus': ''} 
                    onChange={handleChange('username')} />

                    <label htmlFor="username">User name</label>
                </div>
                <div className={errors.email.length > 0 ? "fieldSection email error" : "fieldSection email"}>
                    <p className="errorMessage">{errors.email}</p>
                    <input type="text" name="email"
                    className={email.length > 0 ? 'focus': ''} 
                    onChange={handleChange('email')}/>

                    <label htmlFor="email">E-mail</label>
                </div>
                <div className={errors.password.length > 0 ? "fieldSection password error" : "fieldSection password"}>
                    <p className="errorMessage">{errors.password}</p>
                    <input type="password" name="password" 
                    className={password.length > 0 ? 'focus': ''}
                    onChange={handleChange('password')}/>

                    <label htmlFor="password">Password</label>
                </div>
                <div className={errors.agreement.length > 0 ? "fieldSection agreement error" : "fieldSection agreement"}>
                    <input type="checkbox" name="agreement" id="agreement" 
                    onChange={handleCheck('agreement')} />

                    <label htmlFor="agreement">Creating an account means you’re okay with our <Link to="#">Terms of Service</Link>,
                        <Link to="#">Privacy Policy</Link>, and our default <Link to="#">Notification Settings</Link>.</label>
                </div>
                <button className="btn blue" >Sign up</button>
            </form>
        </div>
    </div>
    )
}
