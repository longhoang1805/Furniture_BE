const { Op, where } = require('sequelize')
const Category = require('../Models/Category')
const CommentProduct = require('../Models/CommentProduct')
const ImageProduct = require('../Models/ImageProduct')
const OrderDetail = require('../Models/OrderDetail')
const Product = require('../Models/Product')

const pagingCategories = async (req, res) => {
  try {
    const allCategories = await Category.findAndCountAll({
      limit: parseInt(req.query.limit),
      offset: parseInt(req.query.offset),
      // include: [Category],
    })
    return res.status(200).json(allCategories)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const showParentCategories = async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      where: { categoryId: null },
    })
    return res.status(200).json(allCategories)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}
const showAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.findAll({})
    return res.status(200).json(allCategories)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const getCategoryById = async (req, res) => {
  const { id } = req.params
  try {
    const result = await Category.findOne({
      where: {
        id: id,
      },
      include: Category,
    })
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

const deleteCategory = async (req, res) => {
  const { id } = req.params
  try {
    const product = await Product.findOne({ where: { categoryId: id } })
    console.log(product.id)
    await CommentProduct.destroy({ where: { productId: product.id } })
    await ImageProduct.destroy({ where: { productId: product.id } })
    await OrderDetail.destroy({ where: { productId: product.id } })
    await Product.destroy({ where: { categoryId: id } })

    await Category.destroy({ where: { id: id } })
    return res.status(200).json({ msg: 'Delete category successfully!' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const searchCategory = async (req, res) => {
  const { keyword } = req.params
  try {
    const result = await Category.findAll({
      where: {
        type: {
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

const createCategory = async (req, res) => {
  const { type, parentCategoryId } = req.body
  try {
    if (parentCategoryId === null) {
      const result1 = await Category.create({
        type: type,
        categoryId: +parentCategoryId === 0 ? null : parentCategoryId,
      })
      return res.status(200).json(result1)
    } else {
      const result2 = await Category.create({
        type: type,
        categoryId: +parentCategoryId === 0 ? null : parentCategoryId,
      })
      return res.status(200).json(result2)
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const updateCategory = async (req, res) => {
  const { type, parentCategoryId } = req.body
  const { id } = req.params
  // console.log('---------------------------')
  // console.log(type)
  // console.log(parentCategoryId)
  // console.log(id)
  try {
    const result = await Category.update(
      {
        type: type,
        categoryId: +parentCategoryId === 0 ? null : parentCategoryId,
      },
      {
        where: {
          id: id,
        },
      }
    )
    return res.status(200).json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const getSubCategories = async (req, res) => {
  const { parentCategoryId } = req.params
  try {
    const subCategories = await Category.findAll({
      where: {
        categoryId: parentCategoryId,
      },
    })
    return res.status(200).json(subCategories)
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

module.exports = {
  pagingCategories,
  deleteCategory,
  searchCategory,
  showParentCategories,
  createCategory,
  updateCategory,
  getCategoryById,
  showAllCategories,
  getSubCategories,
}
