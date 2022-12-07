const express = require('express')
const router = express.Router()

const dataController = require('./../Controllers/dataController')

router.post('/user', dataController.createDataUser)

module.exports = router
