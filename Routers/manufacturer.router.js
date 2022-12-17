const express = require('express')
const { verifyToken, isAdmin } = require('../Middleware/verifyToken')
const router = express.Router()
const manufacturerController = require('../Controllers/manufacturerController')

router.get(
  '/',
  verifyToken,
  isAdmin,
  manufacturerController.showAllManufacturers
)

router.get('/all', manufacturerController.showAllManufacturers)

module.exports = router
