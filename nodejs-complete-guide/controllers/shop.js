const Product = require('../models/product');

exports.getProducts = (request, response) => {
    Product.fetchAll((products) => {
        response.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products',
        })
    })
}

exports.getIndex = (request, response) => {
    Product.fetchAll((products) => {
        response.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
        })
    })
}

exports.getCart = (request, response) => {
    Product.fetchAll((products) => {
        response.render('shop/cart', {
            prods: products,
            pageTitle: 'Your Cart',
            path: '/cart',
        })
    })
}

exports.getCheckout = (request, response) => {
    response.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
    })
}

