const yargs = require('yargs')
const getnotes = require('./notes.js')

yargs.version('1.1.0')

yargs.command({

    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            desctibe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})
//console.log(yargs.argv)
yargs.parse() //parse is required for invoking yargs. In not present, the arguments won't be parsed