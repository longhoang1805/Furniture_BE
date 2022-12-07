const { DataTypes, Sequelize } = require('sequelize')
const { connection } = require('./connection')

const Payment = connection.define(
  'Payment',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
)
module.exports = Payment
