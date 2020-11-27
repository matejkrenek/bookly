// Dependencies
const { error } = require('console');
const User = require('../models/User');

// handle errors function
const handleErrors = (err) => {
    const errors = {
        email: '',
        username: '',
        password: '',
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

module.exports.login_get = (req, res) => {
    res.render('login')
}

module.exports.login_post = (req, res) => {
    res.send('login post')
}

module.exports.signup_get = (req, res) => {
    res.render('signup')
}

module.exports.signup_post = async (req, res) => {
    const { email, username, password } = req.body;

    try{
        const user = await User.create({ email, username, password })
        res.status(200).json({ _id: user._id })
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}