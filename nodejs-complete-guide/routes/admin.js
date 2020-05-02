const express = require('express')
const path = require('path')
const router = express.Router();

const productController = require('../controllers/products')

// /admin/add-product => GET
router.get('/add-product', productController.getAddProduct)

// /admin/product => POST
router.post('/product', productController.postAddProduct)

module.exports = router