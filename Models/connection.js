const { Sequelize, DataTypes } = require('sequelize')
const {
  DB_NAME,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DIALECT,
} = require('../Config/db.config')

const connection = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
})
module.exports = { connection }
