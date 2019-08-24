const fs = require('fs')

const book = {
    title : "Ego is the enemy",
    author : "Ryan Holiday"
}

const jsonStr = JSON.stringify(book)
console.log(jsonStr)

fs.writeFileSync('1-json.json',jsonStr)

const json = JSON.parse(jsonStr)
console.log(json.author)

const jsonBooks = fs.readFileSync('1-json.json').toString()
const jsonBooksJson = JSON.parse(jsonBooks)
console.log(jsonBooksJson.title + ' By ' + jsonBooksJson.author)

