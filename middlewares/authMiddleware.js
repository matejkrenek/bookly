const jwt = require('jsonwebtoken');

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

module.exports = {
    requireAuth
}