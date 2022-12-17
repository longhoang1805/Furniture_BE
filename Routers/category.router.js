const express = require('express')
const { verifyToken, isAdmin } = require('../Middleware/verifyToken')
const router = express.Router()

const categoryController = require('../Controllers/categoryController')

//view all categories
router.get('/all', categoryController.showAllCategories)

//view categories by parentCategoryId
router.get('/:parentCategoryId', categoryController.getSubCategories)

//view all parents categories
router.get(
  '/all-parents',
  verifyToken,
  isAdmin,
  categoryController.showParentCategories
)

//view category by id
router.get('/:id', verifyToken, isAdmin, categoryController.getCategoryById)

//create category
router.post('/create', categoryController.createCategory)

//update category
router.put('/:id', categoryController.updateCategory)

//delete category
router.delete('/:id', verifyToken, isAdmin, categoryController.deleteCategory)

//search category
router.get(
  '/search/:keyword',
  verifyToken,
  isAdmin,
  categoryController.searchCategory
)

//view all categories pagination
router.get('/', verifyToken, isAdmin, categoryController.pagingCategories)

module.exports = router
