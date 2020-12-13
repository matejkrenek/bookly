const Book = require('../models/Book');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {checkUser} = require('../middlewares/authMiddleware');


module.exports.book_post = (req, res) => {
    const { title, author, description, publisher, genre } = req.body
    const coverImageName = req.file != null ? req.file.filename : null
    const token = req.cookies.token
    
    try{
        jwt.verify(token, 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMPBBxtmUK1YHISMkgRsZ1la5Z', async (err, decodedData) => {
            if(!err){
                const createdBy = await decodedData.id
                const book = await Book.create({title, author, description, genre, coverImageName,  publisher, createdBy})
                .then(result =>  
                    res.redirect('/books')
                )
                .catch(err => {
                    res.status(400).json(err)
                    console.log(err)
                })
            } else{
                res.status(400).json({err})
                console.log(err)
            }
        })
    }
    catch(err){
        res.json({err})
        console.log(err)
    }
}

module.exports.books_get = (req, res) => {
    Book.find()
        .then(result => {
            res.render('books', {title: 'Search for a Book', books: result});
        })
        .catch(err => res.send(err))
}

module.exports.books_search = (req, res) => {

    Book.find()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => console.log(err))
}

module.exports.book_get = (req, res) => {
    const id = req.params.id

    Book.findById(id)
        .then(result => {
            res.render('book', {title: result.title, book: result})
        })
        .catch(err => res.status(404).send(err))
}

module.exports.bookCreate_get = (req, res) => {
    res.render('create', {title: 'Create Book'})
}