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
    cancelOrder: {
      type: DataTypes.BOOLEAN,
    },
    shippingAddress: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
)
module.exports = Order
