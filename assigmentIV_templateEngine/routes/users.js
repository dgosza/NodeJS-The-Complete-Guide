const express = require('express')
const route = express.Router()

var users = []

route.get('/users', (request, response) => {
    response.render('users', {
        pageTitle: 'Users!',
        users: users
    })

    console.log(users)
})

route.post('/users', (request, response) => {
    const name = request.body.nameUser;
    console.log(name)
    users.push(name)
    response.redirect('/')
})


module.exports = {
    route: route,
    users: users
}