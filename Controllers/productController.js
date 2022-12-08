const { Op } = require('sequelize')
const Category = require('../Models/Category')
const Manufacturer = require('../Models/Manufacturer')
const Product = require('../Models/Product')

const showAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.findAll({
      include: [Category, Manufacturer],
    })
    return res.status(200).json(allProducts)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const deleteProduct = async (req, res) => {
  const { id } = req.params
  try {
    await Product.destroy({ where: { id: id } })
    return res.status(200).json({ msg: 'Delete product successfully!' })
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

const updateProduct = async (req, res) => {
  const {
    name,
    price,
    salePrice,
    color,
    description,
    manufacturerId,
    categoryId,
  } = req.body
  const { id } = req.params
  try {
    await Product.update(
      {
        name: name,
        price: price,
        sale_price: salePrice,
        color: color,
        description: description,
        manufacturerId: manufacturerId,
        categoryId: categoryId,
      },
      {
        where: {
          id: id,
        },
      }
    )
    res.status(200).json({ msg: 'Product has been updated successfully!' })
  } catch (error) {
    return res.status(500).json({ msg: 'Server err when update product' })
  }
}

const searchProduct = async (req, res) => {
  const { keyword } = req.params
  try {
    const result = await Product.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.substring]: keyword } },
          { salePrice: { [Op.substring]: keyword } },
          { color: { [Op.substring]: keyword } },
          { description: { [Op.substring]: keyword } },
        ],
      },
      include: [Manufacturer, Category],
    })
    return res.status(200).json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}
module.exports = {
  showAllProducts,
  deleteProduct,
  updateProduct,
  searchProduct,
}
