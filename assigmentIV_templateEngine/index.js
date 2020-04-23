const express = require('express')

//Routes
const index = require('./routes/index')
const users = require('./routes/users')
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(index.route)
app.use(users.route)

app.listen(5555)
