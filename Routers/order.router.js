const express = require('express')
const { verifyToken, isAdmin } = require('../Middleware/verifyToken')
const router = express.Router()

const orderController = require('../Controllers/orderController')

//order details by orderId
router.get('/order-detail/:orderId', orderController.getOrderDetail)

//update status by orderId
router.put('/order-status/:orderId', orderController.updateStatus)

//update cancel order by orderId
router.put('/cancel-status/:orderId', orderController.updateCancelOrder)

//create order
router.post('/create', orderController.createOder)

//update order

//delete order
router.delete('/:id', verifyToken, isAdmin, orderController.deleteOrder)

//search order
router.get(
  '/search/:keyword',
  verifyToken,
  isAdmin,
  orderController.searchOrder
)
//view all orders
router.get(
  '/dashboard',
  // verifyToken,
  // isAdmin,
  orderController.showDashboardOrder
)

//view all orders
router.get('/', orderController.showAllOrder)

module.exports = router
