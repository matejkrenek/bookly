// Dependencies
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// handle errors function
const handleErrors = (err) => {
    console.log(err.message, err.code)
    const errors = {
        email: '',
        username: '',
        password: '',
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
    if(err.code === 11000){
        for(const prop in errors){
            if(err.message.includes(prop)){
                errors[prop] = `User with this ${prop} already exists`
                return errors
            }
        }
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
    res.render('signup')
}

module.exports.signup_post = async (req, res) => {
    const { email, username, password } = req.body;

    try{
        const user = await User.create({ email, username, password })
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
    res.render('login')
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

