const express = require('express')
const path = require('path')
const app = express()
const port = 9393
const superagent = require('superagent')
const crypto = require('crypto')
const flickrapi = require('flickrapi')

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req, res) {
    res.sendFile('./public/index.html')
})

app.listen(port)
console.log('Server is Up and Running at Port : ' + port)