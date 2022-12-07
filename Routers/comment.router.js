const express = require('express')
const { verifyToken, isAdmin } = require('../Middleware/verifyToken')
const router = express.Router()
const commentController = require('../Controllers/commentController')

//view all comments
router.get('/', verifyToken, isAdmin, commentController.showAllComments)

//delete comment
router.delete('/:id', verifyToken, isAdmin, commentController.deleteComment)

//search comment
router.get(
  '/search/:keyword',
  verifyToken,
  isAdmin,
  commentController.searchComment
)

module.exports = router
