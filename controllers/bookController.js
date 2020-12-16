const Book = require('../models/Book');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {checkUser} = require('../middlewares/authMiddleware');
const { cloudinary } = require('../helpers/cloudinary');

module.exports.book_post = async (req, res) => {
    let { title, author, publisher, genre, description, coverImageData, coverImageUrl } = req.body;
    const token = req.cookies.token

    try{
        jwt.verify(token, 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMPBBxtmUK1YHISMkgRsZ1la5Z', async (err, decodedData) => {
            if(!err){           
                const createdBy = await decodedData.id

                if(coverImageData){
                        const fileStr = req.body.coverImageData
                        const uploadedResponse = await cloudinary.uploader.upload(fileStr, { upload_preset: "book_covers" });
                        coverImageUrl = `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/image/upload/${uploadedResponse.public_id}.${uploadedResponse.format}`
                }
                const book = await Book.create({title, author, publisher, description, genre, createdBy, coverImageUrl})
                    try{
                        console.log(book)
                    } catch(err){
                        await res.status(400).json(err)
                        console.log(err)
                    }
            } else{
                res.status(400).json({err})
                console.log(err)
            }
        })

    }
    catch(err){
        console.log(err)
    }
}

module.exports.books_get = (req, res) => {
    Book.find((err, result) => {
        if(!err){
            res.render('books', {title: 'Search for a Book', books: result});
        } else{
            res.send(err)
        }
    }).sort({ updatedAt: 'desc' });
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