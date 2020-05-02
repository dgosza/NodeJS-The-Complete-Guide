
const product = [];

exports.getAddProduct = (request, response, next) => {
    response.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    })
}

exports.postAddProduct = (request, response) => {
    product.push({ title: request.body.title })
    response.redirect('/')
}

exports.getShop = (request, response, next) => {
    const products = product;
    response.render('shop', {
        prods: products, 
        pageTitle: 'Shop', 
        path:'/', 
        hasProducts: products.length > 0,
        activeShop: true,
    })
}