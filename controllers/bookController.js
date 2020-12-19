const Book = require('../models/Book');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {checkUser} = require('../middlewares/authMiddleware');
const { cloudinary } = require('../helpers/cloudinary');

// handle errors function
const handleErrors = (err) => {
    console.log(err.message, err.code)
    const errors = {
        title: '',
        author: '',
        genre: '',
        publisher: '',
        description: '',
        coverImageUrl: ''
    }

    // Duplicated error
    if(err.code === 11000){
        for(const prop in errors){
            if(err.message.includes(prop)){
                errors[prop] = `Book with this ${prop} already exists`
            }
        }
        return errors
    }

    if(err.message.includes('book validation failed')){
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }

    return errors
}

module.exports.book_post = async (req, res) => {
    let { title, author, publisher, genre, description, coverImageData, coverImageUrl } = req.body;

    try{
        if(coverImageData){
                const fileStr = req.body.coverImageData
                const uploadedResponse = await cloudinary.uploader.upload(fileStr, { upload_preset: "book_covers" });
                coverImageUrl = `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/image/upload/${uploadedResponse.public_id}.${uploadedResponse.format}`
        }
        const book = await Book.create({title, author, publisher, description, genre, coverImageUrl})
        res.status(200).json({ book: book._id })
    }
    catch(err){
        const errors = handleErrors(err)
        res.status(400).json({errors})
    }
}

module.exports.books_get = (req, res) => {
    Book.find((err, result) => {
        if(!err){
            res.render('books', {title: 'Search for a Book', books: result});
        } else{
            const errors = handleErrors(err)
            res.status(400).send({errors})
        }
    }).sort({ updatedAt: 'desc' });
}

module.exports.books_search = (req, res) => {

    Book.find()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            const errors = handleErrors(err)
            res.status(400).send({errors})
        })
}

module.exports.book_get = (req, res) => {
    const id = req.params.id

    Book.findById(id)
        .then(result => {
            res.render('book', {title: result.title, book: result})
        })
        .catch(err => {
            const errors = handleErrors(err)
            res.status(400).send({errors})
        })
}

module.exports.bookCreate_get = (req, res) => {
    res.render('create', {title: 'Create Book'})
}