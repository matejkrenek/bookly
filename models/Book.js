const mongoose = require('mongoose');

const coverImageBasePath = 'uploads/bookCovers'

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: true,
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [800, 'Description of a book must be at least 800 characters long'],
    },
    rating: {
        type: Number,
    }, 
    genre: {
        type: String,
        required: [true, 'Genre is required'],
    },
    coverImageUrl: {
        type: String,
        required: [true, 'Book cover is required'],
    },
    publisher: {
        type: String,
        required: [true, 'Publisher is required'],
    },
    createdBy: {
    }

}, {timestamps: true});


const Book = mongoose.model('book', bookSchema);

module.exports = Book;

module.exports.coverImageBasePath = coverImageBasePath