const Product = require('../models/product');

//get
exports.getAddProduct = (request, response, next) => {
    response.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    })
}

//post
exports.postAddProduct = (request, response) => {
    const product = new Product(request.body.title)
    product.save()
    response.redirect('/')
}

//get
exports.getShop = (request, response, next) => {
    const products = new Product()
    response.render('shop', {
        prods: products.fetchAll(),
        pageTitle: 'Shop', 
        path:'/', 
        hasProducts: products.length > 0,
        activeShop: true,
    })
}