const express = require('express')
const { verifyToken, isAdmin } = require('../Middleware/verifyToken')
const router = express.Router()

const userController = require('./../Controllers/userController')

router.post('/signup', userController.signUp)
router.post('/signin', userController.signIn)

//Admin side
router.get('/all-users', verifyToken, isAdmin, userController.showAllUser)
router.delete('/:id', verifyToken, isAdmin, userController.deleteUser)
router.get('/search', verifyToken, isAdmin, userController.searchUser)

//Customer side
router.put('/update/:id', verifyToken, userController.updateUser)

module.exports = router
