const { DataTypes, Sequelize } = require('sequelize')
const { connection } = require('./connection')
const Order = require('./Order')

const User = connection.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 25],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 25],
      },
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 300],
      },
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: [10, 12],
      },
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    encryptedPassword: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
)
module.exports = User
