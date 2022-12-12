const { Op } = require('sequelize')
const Manufacturer = require('../Models/Manufacturer')

const showAllManufacturers = async (req, res) => {
  try {
    const results = await Manufacturer.findAll({})
    return res.status(200).json(results)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

module.exports = { showAllManufacturers }
