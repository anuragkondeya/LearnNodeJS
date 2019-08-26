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
        handler(argv) {
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
        handler(argv) {
            notes.removeNote(argv.title)
        }
    }
)

yargs.command(
    {
        command: 'read',
        describe: 'Read a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.readNote(argv.title)
        }
    }
)

yargs.command(
    {
        command: 'listNotes',
        describe: 'List all notes',
        handler() {
            notes.listNotes()
        }
    }
)

yargs.command({
    command: '*',
    handler: (argv) => {
        if (argv._[0]) {
            console.log(chalk.red.inverse('Unknown commmand', argv._[0]))
        }
    }
})
    .demand(1)
//console.log(yargs.argv)
yargs.parse() //parse is required for invoking yargs. In not present, the arguments won't be parsed