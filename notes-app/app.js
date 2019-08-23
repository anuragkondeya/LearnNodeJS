const yargs = require('yargs')
const getnotes = require('./notes.js')

yargs.version('1.1.0')

yargs.command({

    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding new note')
    }
})
console.log(yargs.argv)