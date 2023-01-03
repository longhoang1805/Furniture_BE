const { Op, and } = require('sequelize')
const Category = require('../Models/Category')
const Manufacturer = require('../Models/Manufacturer')
const CommentProduct = require('../Models/CommentProduct')
const Product = require('../Models/Product')
const multer = require('multer')
const path = require('path')
const ImageProduct = require('../Models/ImageProduct')
const User = require('../Models/User')

const showAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.findAndCountAll({
      limit: parseInt(req.query.limit),
      offset: parseInt(req.query.offset),
      include: [Category, Manufacturer, ImageProduct],
    })
    return res.status(200).json(allProducts)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}
const getProductById = async (req, res) => {
  const { productId } = req.params
  try {
    const productById = await Product.findOne({
      where: { id: productId },
      include: [Category, Manufacturer, ImageProduct],
    })

    return res.status(200).json(productById)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const sortByPriceLowToHigh = async (req, res) => {
  try {
    const result = await Product.findAll({
      order: [['salePrice', 'ASC']],
      include: [Category, Manufacturer, ImageProduct],
    })
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

const sortByPriceHighToLow = async (req, res) => {
  try {
    const result = await Product.findAll({
      order: [['salePrice', 'DESC']],
      include: [Category, Manufacturer, ImageProduct],
    })
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

const latestProduct = async (req, res) => {
  try {
    const result = await Product.findAll({
      order: [['createdAt', 'DESC']],
      include: [Category, Manufacturer, ImageProduct],
    })
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

const getProductByManufacturerId = async (req, res) => {
  const { manufacturerId } = req.params
  try {
    const result = await Product.findOne({
      where: { manufacturerId: manufacturerId },
      include: [Manufacturer, Category, ImageProduct],
    })
    return res.status(200).json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}
const getProductByCategoryId = async (req, res) => {
  const { categoryId } = req.params
  try {
    const result = await Product.findOne({
      where: { categoryId: categoryId },
      include: [Manufacturer, Category, ImageProduct],
    })
    return res.status(200).json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const getProductByFilter = async (req, res) => {
  const { categoryId, manufacturerId, color } = req.body
  try {
    if (categoryId && manufacturerId && color) {
      const result1 = await Product.findAll({
        where: {
          [Op.and]: [
            { categoryId: categoryId },
            { manufacturerId: manufacturerId },
            { color: color },
          ],
        },
        include: [Category, Manufacturer, ImageProduct],
      })
      return res.status(200).json(result1)
    } else if (categoryId && manufacturerId) {
      const result2 = await Product.findAll({
        where: {
          [Op.and]: [
            { categoryId: categoryId },
            { manufacturerId: manufacturerId },
          ],
        },
        include: [Category, Manufacturer, ImageProduct],
      })
      return res.status(200).json(result2)
    } else if (categoryId && color) {
      const result3 = await Product.findAll({
        where: { [Op.and]: [{ categoryId: categoryId }, { color: color }] },
        include: [Category, Manufacturer, ImageProduct],
      })
      return res.status(200).json(result3)
    } else if (manufacturerId && color) {
      const result4 = await Product.findAll({
        where: {
          [Op.and]: [{ manufacturerId: manufacturerId }, { color: color }],
        },
        include: [Category, Manufacturer, ImageProduct],
      })
      return res.status(200).json(result4)
    } else {
      const result5 = await Product.findAll({
        where: {
          [Op.or]: [
            { manufacturerId: manufacturerId },
            { color: color === undefined ? 'White' : color },
            { categoryId: categoryId },
          ],
        },
        include: [Category, Manufacturer, ImageProduct],
      })
      return res.status(200).json(result5)
    }
  } catch (error) {
    console.log(error)
    return res.status(200).json({ msg: 'Server err' })
  }
}

const showProductsByColor = async (req, res) => {
  const { color } = req.body
  try {
    const result = await Product.findAll({
      where: { color: color },
      include: [Category, Manufacturer, ImageProduct],
    })
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

const showAllColors = async (req, res) => {
  let newResult = []
  try {
    const result = await Product.findAll({
      attributes: ['color'],
    })
    for (var i = 0; i < result.length; i++) {
      if (newResult.indexOf(result[i].color) === -1) {
        newResult.push(result[i].color)
      }
    }
    return res.status(200).json(newResult)
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

const relatedProducts = async (req, res) => {
  const { categoryId, manufacturerId } = req.body
  try {
    const result = await Product.findAll({
      where: {
        [Op.or]: [
          { categoryId: categoryId },
          { manufacturerId: manufacturerId },
        ],
      },
      include: [Category, Manufacturer, ImageProduct],
      order: [['createdAt', 'DESC']],
    })
    return res.status(200).json(result)
  } catch (error) {
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
    manufacturerId,
    categoryId,
    description,
  } = req.body
  const { id } = req.params
  try {
    const updatedProduct = await Product.update(
      {
        name: name,
        price: price,
        salePrice: salePrice,
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
    const result = await ImageProduct.findOne({ where: { productId: id } })

    if (!result) {
      await ImageProduct.create({
        url: req.file && req.file.path,
        productId: id,
      })
    } else {
      await ImageProduct.update(
        {
          url: req.file && req.file.path,
        },
        { where: { productId: id } }
      )
    }
    res.status(200).json({ msg: 'Product has been updated successfully!' })
  } catch (error) {
    console.log(error)
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
        ],
      },
      include: [Manufacturer, Category, ImageProduct],
      order: [['salePrice', 'ASC']],
    })
    return res.status(200).json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

//create product have problem
const createProduct = async (req, res) => {
  const {
    name,
    price,
    salePrice,
    color,
    manufacturerId,
    categoryId,
    description,
  } = req.body
  try {
    const newProduct = await Product.create({
      name: name,
      price: price,
      salePrice: salePrice,
      color: color,
      description: description,
      manufacturerId: manufacturerId,
      categoryId: categoryId,
    })
    await ImageProduct.create({
      url: req.file.path ? req.file.path : '',
      productId: newProduct.id,
    })
    res
      .status(200)
      .json({ url: 'http://localhost:8080/Images/Upload/' + imageName })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server error' })
  }
}

let imageName = ''
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images/Upload')
  },
  filename: (req, file, cb) => {
    imageName = Date.now() + path.extname(file.originalname)
    cb(null, imageName)
  },
})

const upload = multer({
  storage: storage,
  limits: { fileSize: '500000' },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/
    const mimeType = fileTypes.test(file.mimetype)
    const extname = fileTypes.test(path.extname(file.originalname))

    if (mimeType && extname) {
      return cb(null, true)
    }
    cb('Give proper files formate to upload')
  },
}).single('url')

module.exports = {
  showAllProducts,
  deleteProduct,
  updateProduct,
  searchProduct,
  createProduct,
  upload,
  getProductById,
  getProductByManufacturerId,
  showProductsByColor,
  showAllColors,
  getProductByCategoryId,
  getProductByFilter,
  sortByPriceLowToHigh,
  sortByPriceHighToLow,
  latestProduct,
  relatedProducts,
}
