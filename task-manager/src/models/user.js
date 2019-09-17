const mongoose = require('mongoose')
const validator = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(email) {
            if (!validator.isEmail(email)) {
                throw new Error('Invalid email address')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    password: {
        type: String,
        trim: true,
        validate(password) {
            if (password.length < 6) {
                throw new Error('Password should be greater than 6 chars')
            }
            if (password.toLowerCase().includes("password")) {
                throw new Error('Weak password')
            }
        }
    }
})

module.exports = User