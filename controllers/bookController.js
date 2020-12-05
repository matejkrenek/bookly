const Book = require('../models/Book')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {checkUser} = require('../middlewares/authMiddleware')

module.exports.book_post = (req, res) => {
    const { name, author, imgUrl, description } = req.body
    const token = req.cookies.token
    
    try{
        jwt.verify(token, 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMPBBxtmUK1YHISMkgRsZ1la5Z', async (err, decodedData) => {
            if(!err){
                const createdBy = await decodedData.id
                console.log(decodedData.id)
                const book = await Book.create({name, author, imgUrl, description, createdBy})
                res.json({book})
            } else{
                res.status(400).json({err})
            }
        })
    }
    catch(err){
        res.json({err})
    }
}

module.exports.books_get = (req, res) => {
    Book.find()
        .then(result => res.render('books', {title: 'Search for a Book', books: result}))
        .catch(err => res.send(err))
}