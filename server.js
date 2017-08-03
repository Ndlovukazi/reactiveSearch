const express = require('express')
const instantsearch = require('instantsearch.js');
const app = express()
const url = require('http')
const server = url.createServer(app)


const location = require('./router/location')
const index = require('./router/index')
const home = require('./router/home')
const form = require('./router/form')
const search = require('./router/search')
const map = require('./router/map')
const cordinate = require('./router/cordinates')

app.engine('html', require('ejs').renderFile)
app.set('view engine','ejs')

app.use('/', map)
app.use('/search', search)
app.use('/form', form)
app.use('/cordinates', cordinate)
app.use('/location', location)


server.listen(8000)
console.log('app running on port 3000')