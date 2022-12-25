const CommentProduct = require('../Models/CommentProduct')
const Product = require('../Models/Product')
const User = require('../Models/User')
const Category = require('../Models/Category')
const { Op, where } = require('sequelize')

const showAllComments = async (req, res) => {
  try {
    const allComments = await CommentProduct.findAndCountAll({
      limit: parseInt(req.query.limit),
      offset: parseInt(req.query.offset),
      include: [
        { model: User, attributes: { exclude: ['encryptedPassword'] } },
        { model: Product },
      ],
      order: [['createdAt', 'ASC']],
    })
    return res.status(200).json(allComments)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}
const getByProductId = async (req, res) => {
  const { productId } = req.params
  try {
    const allComments = await CommentProduct.findAll({
      where: {
        productId: productId,
      },
      include: [{ model: User, attributes: ['firstName', 'lastName'] }],
    })
    return res.status(200).json(allComments)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const deleteComment = async (req, res) => {
  const { id } = req.params
  try {
    await CommentProduct.destroy({ where: { id: id } })
    return res.status(200).json({ msg: 'Delete comment successfully!' })
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

const searchComment = async (req, res) => {
  const { keyword } = req.params
  try {
    const result = await CommentProduct.findAll({
      where: {
        content: {
          [Op.substring]: keyword,
        },
      },
      include: [
        { model: User, attributes: { exclude: ['encryptedPassword'] } },
        { model: Product },
      ],
    })
    return res.status(200).json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const createComment = async (req, res) => {
  const { productId, content } = req.body
  try {
    await CommentProduct.create({
      productId: productId,
      userId: req.user.id,
      content: content,
    })
    return res.status(200).json({ msg: 'Comment successfully!' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

module.exports = {
  showAllComments,
  deleteComment,
  searchComment,
  getByProductId,
  createComment,
}
