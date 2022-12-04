const { DataTypes, Sequelize } = require('sequelize')
const { connection } = require('./connection')

const Role = connection.define(
  'Role',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    role: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
)
module.exports = Role
