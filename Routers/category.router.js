const express = require('express')
const { verifyToken, isAdmin } = require('../Middleware/verifyToken')
const router = express.Router()

const categoryController = require('../Controllers/categoryController')

//view all categories
router.get('/', categoryController.showAllCategories)

//delete category
router.delete('/:id', verifyToken, isAdmin, categoryController.deleteCategory)

//search category
router.get(
  '/search/:keyword',
  verifyToken,
  isAdmin,
  categoryController.searchCategory
)

module.exports = router
