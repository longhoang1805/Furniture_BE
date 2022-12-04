const { DataTypes, Sequelize } = require('sequelize')
const { connection } = require('./connection')

const Order = connection.define(
  'Order',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    cancel_order: {
      type: DataTypes.BOOLEAN,
    },
    shipping_address: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
)
module.exports = Order
