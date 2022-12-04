const { DataTypes, Sequelize } = require('sequelize')
const { connection } = require('./connection')

const ImageProduct = connection.define(
  'ImageProduct',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
)
module.exports = ImageProduct
