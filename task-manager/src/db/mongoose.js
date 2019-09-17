const mongoose = require('mongoose')
const validator = require('validator');
const databaseName = 'task-manager-api'
const connectionURL = 'mongodb://127.0.0.1:27017/' + databaseName

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true
})

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

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
    }
})


// const me = new User({
//     name: '         kaka papla2    ',
//     email: 'paplaKaka@nike.com',
//     password: 'kaka124'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error' + error)
// })

const myTask = new Task({
    description: '         clean the house   ',
    completed: true,
    pita: 'kita'
})

myTask.save().then(() => {
    console.log(myTask)
}).catch((error) => {
    console.log('Error' + error)
})