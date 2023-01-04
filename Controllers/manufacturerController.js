const { Op } = require('sequelize')
const CommentProduct = require('../Models/CommentProduct')
const ImageProduct = require('../Models/ImageProduct')
const Manufacturer = require('../Models/Manufacturer')
const OrderDetail = require('../Models/OrderDetail')
const Product = require('../Models/Product')

const showAllManufacturers = async (req, res) => {
  try {
    const results = await Manufacturer.findAll({})
    return res.status(200).json(results)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const paginationAllManufacturers = async (req, res) => {
  try {
    const allManufacturers = await Manufacturer.findAndCountAll({
      limit: parseInt(req.query.limit),
      offset: parseInt(req.query.offset),
    })
    return res.status(200).json(allManufacturers)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const updateManufacturer = async (req, res) => {
  const { manufacturerId } = req.params
  const { manufacturerName } = req.body
  try {
    await Manufacturer.update(
      {
        manufacturerName: manufacturerName,
      },
      { where: { id: manufacturerId } }
    )
    return res.status(200).json({ msg: 'Update manufacturer successfully!' })
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

const deleteManufacturer = async (req, res) => {
  const { manufacturerId } = req.params
  try {
    const product = await Product.findOne({
      where: { manufacturerId: manufacturerId },
    })
    console.log(product.id)
    await CommentProduct.destroy({ where: { productId: product.id } })
    await ImageProduct.destroy({ where: { productId: product.id } })
    await OrderDetail.destroy({ where: { productId: product.id } })
    await Product.destroy({ where: { manufacturerId: manufacturerId } })
    await Manufacturer.destroy({
      where: { id: manufacturerId },
    })
    return res.status(200).json({ msg: 'Delete manufacturer successfully!' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const searchManufacturer = async (req, res) => {
  const { keyword } = req.params
  try {
    const result = await Manufacturer.findAll({
      where: {
        manufacturerName: {
          [Op.substring]: keyword,
        },
      },
    })
    return res.status(200).json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const createManufacturer = async (req, res) => {
  const { manufacturerName } = req.body
  try {
    await Manufacturer.create({
      manufacturerName: manufacturerName,
    })
    return res.status(200).json({ msg: 'Create manufacturer successfully!' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const getManufacturerById = async (req, res) => {
  const { id } = req.params
  try {
    const result = await Manufacturer.findOne({
      where: {
        id: id,
      },
    })
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

module.exports = {
  showAllManufacturers,
  paginationAllManufacturers,
  updateManufacturer,
  deleteManufacturer,
  searchManufacturer,
  createManufacturer,
  getManufacturerById,
}
