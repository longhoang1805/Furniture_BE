const express = require('express')
const router = express.Router()

const dataController = require('./../Controllers/dataController')

router.post('/user', dataController.createDataUser)
router.post('/category', dataController.createDataCategory)

module.exports = router
