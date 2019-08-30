const express = require('express')
const chalk = require('chalk')

const app = express()

app.get('', (reg, res) => {
    res.send('<h1>Hello express!</h1>')
})

app.get('/help', (reg, res) => {
    res.send([{
        name: 'Anurag',
        id: 22
    },
    {
        name: 'Kondeya',
        id: 23
    }
    ])
})

app.get('/about', (req, res) => {
    res.send('<h1>about!</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: "it's raining ",
        location: 'Sydney'
    })
})

app.listen(3000, () => {
    console.log(chalk.green.inverse('Server is running'))
})