const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Usernmae is required parameter'],
        unique: true,
        lowercase: true,
        minlength: [3, 'Username must be at least 3 characters long'],
    },

    email: {
        type: String,
        required: [true, 'Email is required parameter'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'This is not a valid email address'],
    },
    
    password: {
        type: String,
        required: [true, 'Password is required parameter'],
        minlength: [6, 'Password must be at least 6 characters long'],
    },

    agreement: {
        type: Boolean,
        required: [true, 'Required'],
        validate: {
            validator: function (value) {
                return value
            },
            message: 'This value must be true'
        }
    }
}, {timestamps: true} );

// This will fire function before storing data in database
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

// Static method for login user
userSchema.statics.login = async function(email, password){
    const user = await this.findOne({ email })

    if(user){
        const auth = await bcrypt.compare(password, user.password);

        if(auth){
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}

const User = mongoose.model('user', userSchema);

module.exports = User;