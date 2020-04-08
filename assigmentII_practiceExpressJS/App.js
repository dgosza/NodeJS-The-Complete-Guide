const express = require('express')
const app = express()


app.use('/users', (request, response, next) => {
    console.log('user request');
    response.send("<h1>Request users!</h1>")
})

app.use('/', (request, response, next) => {
    console.log("fisrt middleware");
    next();
})

app.use('/', (request, response, next) => {
    console.log("last middlwware");
    response.send("<h1> Hello World!</h1>");
})

app.listen(4444);