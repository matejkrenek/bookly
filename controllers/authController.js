// Dependencies
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// handle errors function
const handleErrors = (err) => {
    console.log(err.message, err.code)
    const errors = {
        username: '',
        email: '',
        password: '',
        agreement: ''
    }

    // incorrect email
    if(err.message === 'incorrect email'){
        errors.email = 'Email address is incorrect'
    }

    // incorrect password
    if(err.message === 'incorrect password'){
        errors.password = 'Password is incorrect'
    }

    // Duplicated error
    if(err.message.includes('username') && err.code === 11000){
        errors.username = `User with this username already exists`
    }

    if(err.message.includes('email') && err.code === 11000){
        errors.email = `User with this email already exists`
    }

    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }

    return errors
}

// Create Token
const tokenAge = 24*60*60;
const createToken = (id) => {
    return jwt.sign({ id }, 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMPBBxtmUK1YHISMkgRsZ1la5Z', {
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
    res.redirect('/');
}

