const path = require('path')
const express = require('express')
const chalk = require('chalk')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) =>{
    res.render('index',{
        title: 'Weather',
        name: 'Anurag Kondeya' 
    })
})

app.get('/about',(req,res) =>{
    res.render('about',{
        title: 'Weather',
        name: 'Anurag Kondeya' 
    })
})

app.get('/help',(req,res) =>{
    res.render('help',{
        message: 'Help will always be given at Hogwarts to those who ask for it.'
    })
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