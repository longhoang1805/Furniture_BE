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
  User.hasMany(Order, {
    foreignKey: {
      name: 'userId',
      type: DataTypes.INTEGER,
    },
  })
  Order.belongsTo(User, {
    foreignKey: {
      name: 'userId',
      type: DataTypes.INTEGER,
    },
  })

  //User and CommentProduct
  User.hasMany(CommentProduct, {
    foreignKey: {
      name: 'userId',
      type: DataTypes.INTEGER,
    },
  })
  CommentProduct.belongsTo(User, {
    foreignKey: {
      name: 'userId',
      type: DataTypes.INTEGER,
    },
  })

  //Product and ImageProduct
  Product.hasMany(ImageProduct, {
    foreignKey: {
      name: 'productId',
      type: DataTypes.INTEGER,
    },
  })
  ImageProduct.belongsTo(Product, {
    foreignKey: {
      name: 'productId',
      type: DataTypes.INTEGER,
    },
  })

  //Product and Manufacturer
  Manufacturer.hasMany(Product, {
    foreignKey: {
      name: 'manufacturerId',
      type: DataTypes.INTEGER,
    },
  })
  Product.belongsTo(Manufacturer, {
    foreignKey: {
      name: 'manufacturerId',
      type: DataTypes.INTEGER,
    },
  })

  //Product and Category
  Category.hasMany(Product, {
    foreignKey: {
      name: 'categoryId',
      type: DataTypes.INTEGER,
    },
  })
  Product.belongsTo(Category, {
    foreignKey: {
      name: 'categoryId',
      type: DataTypes.INTEGER,
    },
  })

  //Product and OrderDetail
  Product.hasOne(OrderDetail, {
    foreignKey: {
      name: 'productId',
      type: DataTypes.INTEGER,
    },
  })
  OrderDetail.belongsTo(Product, {
    foreignKey: {
      name: 'productId',
      type: DataTypes.INTEGER,
    },
  })

  //Product and CommmentProduct
  Product.hasMany(CommentProduct, {
    foreignKey: {
      name: 'productId',
      type: DataTypes.INTEGER,
    },
  })
  CommentProduct.belongsTo(Product, {
    foreignKey: {
      name: 'productId',
      type: DataTypes.INTEGER,
    },
  })

  //Order and OrderDetail
  Order.hasMany(OrderDetail, {
    foreignKey: {
      name: 'orderId',
      type: DataTypes.INTEGER,
    },
  })
  OrderDetail.belongsTo(Order, {
    foreignKey: {
      name: 'orderId',
      type: DataTypes.INTEGER,
    },
  })

  //Order and Payment
  Order.hasOne(Payment, {
    foreignKey: {
      name: 'orderId',
      type: DataTypes.INTEGER,
    },
  })
  Payment.belongsTo(Order, {
    foreignKey: {
      name: 'orderId',
      type: DataTypes.INTEGER,
    },
  })

  //Payment and PaymentMethod
  PaymentMethod.hasMany(Payment, {
    foreignKey: {
      name: 'paymentMethodId',
      type: DataTypes.INTEGER,
    },
  })
  Payment.belongsTo(PaymentMethod, {
    foreignKey: {
      name: 'paymentMethodId',
      type: DataTypes.INTEGER,
    },
  })

  //Self referencing Category
  Category.hasMany(Category, {
    foreignKey: {
      name: 'categoryId',
      type: DataTypes.INTEGER,
    },
  })
  Category.belongsTo(Category, {
    foreignKey: {
      name: 'categoryId',
      type: DataTypes.INTEGER,
    },
  })

  //Sync all model
  connection.sync({ force: false })
}

module.exports = setAssociation
