const express = require('express')
const { verifyToken, isAdmin } = require('../Middleware/verifyToken')
const router = express.Router()

const productController = require('../Controllers/productController')

//show all product colors
router.get('/all-colors', productController.showAllColors)

//show related products
router.post('/related-products', productController.relatedProducts)

//sort products by price low to high
router.get('/price-low-to-high', productController.sortByPriceLowToHigh)

//sort products by price low to high
router.get('/price-high-to-low', productController.sortByPriceHighToLow)

//sort products by latest product
router.get('/latest', productController.latestProduct)

//show products by categoryId
router.get(
  '/get-by-categoryId/:categoryId',
  productController.getProductByCategoryId
)

//show products by categoryID, manufacturerId, color
router.post('/get-by-filter', productController.getProductByFilter)

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

//get products by manufacturerId
router.get(
  '/get-by-manufacturerId/:manufacturerId',
  productController.getProductByManufacturerId
)

//show products by color
router.post('/get-products-by-color', productController.showProductsByColor)

//search product
router.get('/search/:keyword', productController.searchProduct)

//show all products
router.get('/', productController.showAllProducts)

module.exports = router
