const fs = require('fs')
const chalk = require('chalk')

const fileName = '1-json.json'

const jsonDataFromFile = fs.readFileSync(fileName)

const jsonDataJson = JSON.parse(jsonDataFromFile);
jsonDataJson.name = 'Anurag'
jsonDataJson.age = 35

fs.writeFileSync(fileName, JSON.stringify(jsonDataJson))
console.log(chalk.green.inverse('Done'))




// const jsonStr = JSON.stringify(book)
// console.log(jsonStr)

// fs.writeFileSync('1-json.json',jsonStr)

// const json = JSON.parse(jsonStr)
// console.log(json.author)

// const jsonBooks = fs.readFileSync('1-json.json').toString()
// const jsonBooksJson = JSON.parse(jsonBooks)
// console.log(jsonBooksJson.title + ' By ' + jsonBooksJson.author)

