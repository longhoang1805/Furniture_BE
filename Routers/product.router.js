const express = require('express')
const { verifyToken, isAdmin } = require('../Middleware/verifyToken')
const router = express.Router()

const productController = require('../Controllers/productController')

//update product
router.put('/:id', verifyToken, isAdmin, productController.updateProduct)

//delete product
router.delete('/:id', verifyToken, isAdmin, productController.deleteProduct)

//search product
router.get('/search/:keyword', productController.searchProduct)

//show all products
router.get('/', verifyToken, isAdmin, productController.showAllProducts)

module.exports = router
