const { DataTypes, Sequelize } = require('sequelize')
const { connection } = require('./connection')

const PaymentMethod = connection.define(
  'PaymentMethod',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    method: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
)
module.exports = PaymentMethod
