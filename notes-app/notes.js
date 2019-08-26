const fs = require('fs')
const chalk = require('chalk')


const fileName = 'notes.json'

const getNotes = () => 'Your notes...'


const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicate = notes.find((note) => note.title === title)

  if (!duplicate) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('Added ' + title))

  } else {
    console.log(chalk.red.inverse('Note title taken'))
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync(fileName, JSON.stringify(notes))
}

const listNotes = () => {
  const notes = loadNotes()
  notes.forEach(element => {
    console.log(chalk.blue.inverse(element.title))
  });
}

const readNote = (title) => {
  //debugger
  const notes = loadNotes()
  const note = notes.find((note) => note.title == title)
  if(note){
    console.log(chalk.inverse('Title ' + note.title))
    console.log('Body ' + note.body);
  }else{
    console.log(chalk.red.inverse('No note found for the given title '+title))
  }

}


const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync(fileName)
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
  } catch (e) {
    return []
  }
}

const removeNote = (title) => {
  const notes = loadNotes().filter((note) => note.title !== title)
  saveNotes(notes)
  console.log(chalk.green.inverse('Removed ' + title))
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}