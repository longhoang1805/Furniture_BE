const express = require('express')
const { verifyToken, isAdmin } = require('../Middleware/verifyToken')
const router = express.Router()
const checkoutController = require('../Controllers/checkoutController')

router.post('/create-checkout-session', verifyToken, checkoutController.checkout)

router.post('/check-session', verifyToken, checkoutController.checkSession)

module.exports = router
