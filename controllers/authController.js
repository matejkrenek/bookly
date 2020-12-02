// Dependencies
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { handleErrors } = require('../helpers/errorHandling')
const nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');

// Config
require('dotenv').config({
    path:'./config/config.env'
})

// Create Token
const tokenAge = 24*60*60;
const createToken = (username, email, password, agreement) => {
    return jwt.sign({ username, email, password, agreement }, process.env.JWT_ACCOUNT_ACTIVATION, {
        expiresIn: tokenAge
    });
}

// email transporter
let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_FROM_PASS
    }
}));

module.exports.signup_get = (req, res) => {

}

module.exports.signup_post = async (req, res) => {
    const { email, username, password, agreement } = req.body;

    try{
        const token = await createToken(username, email, password, agreement)

        let mailOptions = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'Confirming Registration',
            text: '',
            html: `
                <h1 style="font-family: serif; color: #2D32E2; font-size: 78px;">Bookly</h1>
                <p style="font-size: 16px; font-family: sans-serif; color: #5E6C80; margin-bottom: 32px;">Registration was successful!!</p>
                <a href="${process.env.CLIENT_URL}/activation/${token}" style="font-family: sans-serif; color: #FFFFFF; font-size: 16px; padding: 24px 48px; border: none; background-color: #2D32E2; font-weight: 600; text-decoration: none; text-align: center;">Active an Account</a>
                `
        };

        transporter.sendMail(mailOptions, async (err, data) => {
            if (!err) {
                res.status(200).json({token})
            } else {
                res.status(400).json({'err': err})
                console.log(process.env.EMAIL_FROM, process.env.EMAIL_FROM_PASS)
            }
        });     
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json( errors );
    }
}

module.exports.login_get = (req, res) => {

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

module.exports.activation = (req, res) => {
    const { token } = req.body

    if(token) {
        // Verify token
        jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
            if(err){
                return res.status(401).json({
                    error: 'Expired Token. Signup again'
                })
            } else{
                const { username, email, password, agreement } = decoded
            }
        })
    }
}

