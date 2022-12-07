const express = require('express')
const { verifyToken, isAdmin } = require('../Middleware/verifyToken')
const router = express.Router()

const orderController = require('../Controllers/orderController')

//view all orders
router.get('/', orderController.showAllOrder)

//create order
router.post('/create', orderController.createOder)

//update order

//delete order
router.delete('/:id', verifyToken, isAdmin, orderController.deleteOrder)

module.exports = router
