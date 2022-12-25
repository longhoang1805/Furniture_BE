const express = require('express')
const { verifyToken, isAdmin } = require('../Middleware/verifyToken')
const router = express.Router()
const commentController = require('../Controllers/commentController')

//search comment
router.get(
  '/search/:keyword',
  verifyToken,
  isAdmin,
  commentController.searchComment
)
//view all comments
router.post('/create', verifyToken, commentController.createComment)

//view all comments
router.get('/', commentController.showAllComments)

//view by productId
router.get('/:productId', commentController.getByProductId)

//delete comment
router.delete('/:id', verifyToken, isAdmin, commentController.deleteComment)

module.exports = router
