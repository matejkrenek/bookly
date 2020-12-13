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
    coverImage: {
        type: Buffer,
        required: true,
    },
    coverImageType: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
    },
    publisher: {
        type: String,
        required: true
    },
    createdBy: {
    }

});

bookSchema.virtual('coverImagePath').get(function(){
    if(this.coverImage != null && this.coverImageType != null){
        return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
    }
})


const Book = mongoose.model('book', bookSchema);

module.exports = Book;

module.exports.coverImageBasePath = coverImageBasePath