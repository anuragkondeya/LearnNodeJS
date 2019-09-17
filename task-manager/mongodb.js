// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
const { MongoClient, ObjectID } = require('mongodb')
var validator = require('validator');

const id = new ObjectID()

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to the Database')
    }


    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'Anurag',
        age: 34
    })


    // db.collection('users').insertOne({
    //     name: 'Manoj',
    //     age: 34
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Error inserting task')
    //     }
    //     console.log(result.ops)
    // })


    // db.collection('tasks').insertMany([{
    //         desciption: 'Task 1',
    //         completed: true
    //     },
    //     {
    //         desciption: 'Task 2',
    //         completed: true
    //     },
    //     {
    //         desciption: 'Task 3',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Error inserting many document')
    //     }
    //     console.log(result.ops)
    // })


    // db.collection('tasks').findOne({ completed: false }, (error, task) => {
    //     if (error) {
    //         return console.log("Error")
    //     }
    //     //console.log("Task " + task.desciption)

    // })

    // db.collection('tasks').find({ completed: true }).toArray((error, tasks) => { //Find returns a cursor and hence toArray
    //     if (error) {
    //         return console.log("Error")
    //     }
    //     tasks.forEach((task) => {
    //         console.log(task)
    //         console.log(task.desciption)
    //     });

    // })

    // db.collection('tasks').updateOne({
    //     _id: new ObjectID('5d741e3b5b6f928eb2889619')
    // }, {
    //     $set: {
    //         desciption: 'Task 44'
    //     }
    // }).then((result) => {
    //     console.log('Success')
    // }).catch((error) => {
    //     console.log('error')
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         desciption: 'Task 44'
    //     }
    // }).then((result) => {
    //     console.log('Success')
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log('error')
    // })


    // db.collection('tasks').deleteMany({
    //     completed: true
    // }).then((result) => {
    //     console.log('Success')
    // }).catch((error) => {
    //     console.log('error')
    // })
})