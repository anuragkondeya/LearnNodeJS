const path = require('path')
const express = require('express')
const chalk = require('chalk')
const hbs = require('hbs')


const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPaths = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewPaths)
console.log(partialsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) =>{
    res.render('index',{
        title: 'Weather',
        name: 'Anurag Kondeya' 
    })
})

app.get('/about',(req,res) =>{
    res.render('about',{
        title: 'About',
        name: 'Anurag Kondeya' 
    })
})

app.get('/help',(req,res) =>{
    res.render('help',{
        message: 'Help will always be given at Hogwarts to those who ask for it.',
        title: 'Help',
        name: 'Anurag Kondeya' 
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: "it's raining ",
        location: 'Sydney'
    })
})

app.get('/help/*',(req,res) =>{
    res.render('404',{
        title: 'Help page not found',
        message: 'The help page you are looking for is not available.',
        name: 'Anurag Kondeya' 
    })
})


app.get('*', (req, res) => {
    res.render('help',{
        title: ' Page not found',
        message: 'Page you are looking for is not available.',
        name: 'Anurag Kondeya' 
    })
})

app.listen(3000, () => {
    console.log(chalk.green.inverse('Server is running'))
})