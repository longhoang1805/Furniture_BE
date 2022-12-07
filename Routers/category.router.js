const express = require('express')
const { verifyToken, isAdmin } = require('../Middleware/verifyToken')
const router = express.Router()

const categoryController = require('../Controllers/categoryController')

//view all categories
router.get('/', categoryController.showAllCategories)

//delete order
router.delete('/:id', verifyToken, isAdmin, categoryController.deleteCategory)

module.exports = router
