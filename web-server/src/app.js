const express = require('express')
const chalk = require('chalk')

const app = express()

app.get('',(reg,res) =>{
    res.send('Hello express!')
} )

app.get('/help',(reg,res) =>{
    res.send('Help!')
} )

app.get('/about',(reg,res) =>{
    res.send('about!')
} )

app.get('/weather',(reg,res) =>{
    res.send('show weather!')
} )

app.listen(3000, () =>{
    console.log(chalk.green.inverse('Server is running'))
})