const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

yargs.command(
    {
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            notes.addNote(argv.title, argv.body)
        }
    }
)

yargs.command(
    {
        command: 'remove',
        describe: 'remove a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            notes.removeNote(argv.title)
        }
    }
)
//console.log(yargs.argv)
yargs.parse() //parse is required for invoking yargs. In not present, the arguments won't be parsed