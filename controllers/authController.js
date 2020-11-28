// Dependencies
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { handleErrors } = require('../helpers/errorHandling')
const _ = require('lodash');
const { OAuth2Client } = require('google-auth-library');
const fetch = require('node-fetch')
//const sgMail = require('@sendgrid/mail')
//require('dotenv').config({
//    path:'./config/config.env'
//})

//sgMail.setApiKey(process.env.MAIL_KEY)


// Create Token
const tokenAge = 24*60*60;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_ACCOUNT_ACTIVATION, {
        expiresIn: tokenAge
    });
}

module.exports.signup_get = (req, res) => {
    res.render('signup', {title: "Start your journey"})
}

module.exports.signup_post = async (req, res) => {
    const { email, username, password, agreement } = req.body;

    try{
        const user = await User.create({ email, username, password, agreement })
        const token = createToken(user._id)
        /*const emailData = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'Account activation link',
            html: `
                <h1>Please Click to the link to activate your account</h1>
                <p>${process.env.CLIENT_URL}/user/active/${token}</p>
                </hr>
                <p>This email contain sensetive data</p>
                <p>${process.env.CLIENT_URL}</p>
                `
        }

        sgMail.send(emailData)
        .then((sent) => {
            console.log('Email has been sent to', sent)
            return res.json({success: `Email has been sent to ${email}`})
        })
        .catch(err => {
            res.status(400).json({
                error: err
            })
        })
        */
        res.cookie('token', token, { httpOnly: true, maxAge: tokenAge*1000 })
        res.status(200).json({ user: user._id })
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.login_get = (req, res) => {
    res.render('login', {title: 'Welcome back'})
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body

    try{
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie('token', token, {httpOnly: true, maxAge: tokenAge*1000})
        res.status(200).json({ user: user._id })
    } 
    catch(err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}

module.exports.logout_get = (req, res) => {
    res.cookie('token', '', {maxAge: 1});
    res.redirect('/login');
}

