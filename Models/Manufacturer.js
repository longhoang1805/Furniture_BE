const { DataTypes, Sequelize } = require('sequelize')
const { connection } = require('./connection')

const Manufacturer = connection.define(
  'Manufacturer',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    manufacturerName: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
)
module.exports = Manufacturer
