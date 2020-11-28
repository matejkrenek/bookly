const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Authentication function
const requireAuth = (req, res, next) => {
    const token = req.cookies.token;

    if(token){
        jwt.verify(token, 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMPBBxtmUK1YHISMkgRsZ1la5Z', (err, decodedData) => {
            if(err){
                console.log(err.message)
                res.redirect('/login')
            } else{
                console.log(decodedData)
                next()
            }
        })

    } else{
        res.redirect('/login')
    }
}

// Not Auth
const requireNotAuth = (req, res, next) => {
    const token = req.cookies.token;

    if(token){
        jwt.verify(token, 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMPBBxtmUK1YHISMkgRsZ1la5Z', (err, decodedData) => {
            if(err){
                console.log(err.message)
                next()
            } else{
                console.log(decodedData)
                res.redirect('/user')
            }
        })

    } else{
        next()
    }
}

// Check which user is login
const checkUser = (req, res, next) => {
    const token = req.cookies.token

    if(token){
        jwt.verify(token, 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMPBBxtmUK1YHISMkgRsZ1la5Z', async (err, decodedData) => {
            if(err){
                res.locals.user = null;
                next()
            } else{
                const user = await User.findById(decodedData.id);
                res.locals.user = user;
                next()
            }
        })
    } else{
        res.locals.user = null;
        next()
    }
}

module.exports = {
    requireAuth,
    checkUser,
    requireNotAuth,

}