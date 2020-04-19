const express = require('express')
const path = require('path')

const routes = express.Router()

routes.get('/users', (request, response) => { 
    response.sendFile(path.join(__dirname, '..', 'views', 'users.html'))
})

module.exports = routes