const { DataTypes } = require('sequelize')
const CommentProduct = require('./CommentProduct')
const { connection } = require('./connection')
const ImageProduct = require('./ImageProduct')
const Order = require('./Order')
const Product = require('./Product')
const Role = require('./Role')
const User = require('./User')
const Manufacturer = require('./Manufacturer')
const Category = require('./Category')
const OrderDetail = require('./OrderDetail')
const PaymentMethod = require('./PaymentMethod')
const Payment = require('./Payment')

const setAssociation = () => {
  //User and Role
  // Role.hasMany(User, {
  //   foreignKey: {
  //     defaultValue: 1,
  //   },
  // })
  // Role.hasMany(User)
  // Role.belongsTo(User)

  //User and Order
  User.hasMany(Order)
  // Order.belongsTo(User)

  //User and CommentProduct
  User.hasMany(CommentProduct)
  // CommentProduct.belongsTo(User)

  //Product and ImageProduct
  Product.hasMany(ImageProduct)
  // ImageProduct.belongsTo(Product)

  //Product and Manufacturer
  Manufacturer.hasMany(Product)
  // Product.belongsTo(Manufacturer)

  //Product and Category
  Category.hasMany(Product)
  // Product.belongsTo(Category)

  //Product and OrderDetail
  Product.hasOne(OrderDetail)
  // OrderDetail.belongsTo(Product)

  //Product and CommmentProduct
  Product.hasMany(CommentProduct)
  // CommentProduct.belongsTo(Product)

  //Order and OrderDetail
  Order.hasMany(OrderDetail)
  // OrderDetail.belongsTo(Order)

  //Order and Payment
  Order.hasOne(Payment)

  //Payment and PaymentMethod
  PaymentMethod.hasMany(Payment)

  //Self referencing Category
  Category.hasMany(Category, { foreignKey: 'OtherCategoryId' })
  // Category.belongsTo(Category, { foreignKey: 'OtherCategoryId' })

  //Sync all model
  connection.sync({ force: true })
}

module.exports = setAssociation
