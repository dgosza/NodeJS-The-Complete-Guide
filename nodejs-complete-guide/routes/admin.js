const express = require('express')
const path = require('path')

const router = express.Router();

const product = [];

// /admin/add-product => GET
router.get('/add-product', (request, response, next) => {
    response.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    })
})

// /admin/product => POST
router.post('/product', (request, response) => {
    product.push({ title: request.body.title })
    response.redirect('/')
})

exports.routes = router
exports.products = product