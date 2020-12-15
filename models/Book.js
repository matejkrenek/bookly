const mongoose = require('mongoose');

const coverImageBasePath = 'uploads/bookCovers'

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
    }, 
    genre: {
        type: String,
        required: true
    },
    coverImageUrl: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    createdBy: {
    }

});


const Book = mongoose.model('book', bookSchema);

module.exports = Book;

module.exports.coverImageBasePath = coverImageBasePath