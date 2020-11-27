const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required parameter'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'This is not a valid email address'],
    },

    username: {
        type: String,
        required: [true, 'Usernmae is required parameter'],
        unique: true,
        lowercase: true,
        minlength: [3, 'Username must be at least 3 characters long'],
    },

    password: {
        type: String,
        required: [true, 'Password is required parameter'],
        minlength: [6, 'Password must be at least 6 characters long'],
    },
});

const User = mongoose.model('user', userSchema);

module.exports = User;