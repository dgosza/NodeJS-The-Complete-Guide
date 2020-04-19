const express = require('express');
const path = require('path')

const index = require('./routes/index')
const users = require('./routes/users')

const app = express();

app.use(index)
app.use(users)

app.use(express.static(path.join(__dirname, 'public')))

app.use((request, response) => {
    response.status(404).send('wrong page !')
})

app.listen(7777)
