const mongoose = require('mongoose')
const databaseName = 'task-manager-api'
const connectionURL = 'mongodb://127.0.0.1:27017/' + databaseName

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: 'Anurag',
    age: '34'
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error' + error)
})