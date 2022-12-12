const { Op } = require('sequelize')
const Category = require('../Models/Category')
const Manufacturer = require('../Models/Manufacturer')
const Product = require('../Models/Product')
const multer = require('multer')
const path = require('path')
const ImageProduct = require('../Models/ImageProduct')

const showAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.findAndCountAll({
      limit: parseInt(req.query.limit),
      offset: parseInt(req.query.offset),
      include: [Category, Manufacturer],
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
    const productById = await Product.findOne({ where: { id: productId } })
    return res.status(200).json(productById)
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
        url: req.file.path ? req.file.path : '',
        productId: id,
      })
    } else {
      await ImageProduct.update(
        {
          url: req.file.path ? req.file.path : '',
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
    res.status(201).json({ msg: 'Product has been created successfully!' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server error' })
  }
}

//upload images controller
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images/Upload')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
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
}
