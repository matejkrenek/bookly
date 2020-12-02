import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './formSection.css'

export const Signup = () => {
    const [formData, setFormData] = useState({
        "username": "",
        "email": "",
        "password": ""
    })

    const { username, email, password } = formData;

    const handleChange = text => e => {
        console.log(username)
        setFormData({...formData, [text]: e.targe.value })
    }

    const [activeState, setActiveState] = useState({
        input1: true,
        input2: true,
        input3: true
    })




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
                    <input type="text" name="username" className={activeState.input1 ? 'focus' : ''} onChange={handleChange('username')} value={username}/>
                    <label htmlFor="username">User name</label>
                </div>
                <div className="fieldSection email">
                    <p className="errorMessage"></p>
                    <input type="text" name="email" className={activeState.input2 ? 'focus' : ''}  onChange={() => handleChange('email')}/>
                    <label htmlFor="email">E-mail</label>
                </div>
                <div className="fieldSection password">
                    <p className="errorMessage"></p>
                    <input type="password" name="password" className={activeState.input3 ? 'focus' : ''} onChange={() => handleChange('password')}/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="fieldSection agreement">
                    <input type="checkbox" name="agreement" id="agreement" />
                    <label htmlFor="agreement">Creating an account means you’re okay with our <Link to="#">Terms of Service</Link>,
                        <Link to="#">Privacy Policy</Link>, and our default <Link to="#">Notification Settings</Link>.</label>
                </div>
                <button className="btn blue">Sign up</button>
            </form>
        </div>
    </div>
    )
}
