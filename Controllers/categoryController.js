const { Op } = require('sequelize')
const Category = require('../Models/Category')

const showAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.findAll({})
    return res.status(200).json(allCategories)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const deleteCategory = async (req, res) => {
  const { id } = req.params
  try {
    await Category.destroy({ where: { id: id } })
    return res.status(200).json({ msg: 'Delete category successfully!' })
  } catch (error) {
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

module.exports = { showAllCategories, deleteCategory, searchCategory }
