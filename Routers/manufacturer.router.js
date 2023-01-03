const express = require('express')
const { verifyToken, isAdmin } = require('../Middleware/verifyToken')
const router = express.Router()
const manufacturerController = require('../Controllers/manufacturerController')

router.get(
  '/paginationAll',
  verifyToken,
  isAdmin,
  manufacturerController.paginationAllManufacturers
)
router.get(
  '/',
  verifyToken,
  isAdmin,
  manufacturerController.showAllManufacturers
)
// User get all manufacturer
router.get('/all', manufacturerController.showAllManufacturers)
//create manufacturer
router.post(
  '/create',
  // verifyToken,
  // isAdmin,
  manufacturerController.createManufacturer
)

router.put(
  '/:manufacturerId',
  // verifyToken,
  // isAdmin,
  manufacturerController.updateManufacturer
)

router.delete(
  '/:manufacturerId',
  verifyToken,
  isAdmin,
  manufacturerController.deleteManufacturer
)

//search manufacturer
router.get(
  '/search/:keyword',
  verifyToken,
  isAdmin,
  manufacturerController.searchManufacturer
)

//view manufacturer by id
router.get(
  '/:id',
  verifyToken,
  isAdmin,
  manufacturerController.getManufacturerById
)

module.exports = router
