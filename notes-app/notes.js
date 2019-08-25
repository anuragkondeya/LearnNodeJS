const fs = require('fs')
const chalk = require('chalk')


const fileName = 'notes.json'

const getNotes = function () {
  return 'Your notes...'
}

const addNote = function (title, body) {
  const notes = loadNotes()
  const duplicates = notes.filter(function (note) {
    return note.title === title
  })

  if (duplicates.length === 0) {

    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('Added ' + title ))

  } else {
    console.log(chalk.red.inverse('Note title taken'))
  }
}

const saveNotes = function (notes) {
  fs.writeFileSync(fileName, JSON.stringify(notes))
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync(fileName)
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
  } catch (e) {
    return []
  }
}

const removeNote = function (title) {
  const notes = loadNotes().filter(function (note) {
    return note.title !== title
  })
  saveNotes(notes)
  console.log(chalk.green.inverse('Removed ' + title ))
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}