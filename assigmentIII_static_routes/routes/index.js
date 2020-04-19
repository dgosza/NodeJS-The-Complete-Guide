const express = require('express')
const path = require('path')
const routes = express.Router();

routes.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = routes