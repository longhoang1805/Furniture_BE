const express = require('express')
const { verifyToken, isAdmin } = require('../Middleware/verifyToken')
const router = express.Router()

const productController = require('../Controllers/productController')

//update product
router.put('/:id', productController.upload, productController.updateProduct)

//create product
router.post(
  '/create',
  productController.upload,
  productController.createProduct
)

//delete product
router.delete('/:id', verifyToken, isAdmin, productController.deleteProduct)

//get product by id
router.get('/:productId', productController.getProductById)

//search product
router.get('/search/:keyword', productController.searchProduct)

//show all products
router.get('/', verifyToken, isAdmin, productController.showAllProducts)

module.exports = router
