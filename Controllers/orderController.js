const { Op } = require('sequelize')
const md5 = require('md5')
const Order = require('../Models/Order')
const User = require('../Models/User')

const showAllOrder = async (req, res) => {
  try {
    const allOrders = await Order.findAndCountAll({
      limit: parseInt(req.query.limit),
      offset: parseInt(req.query.offset),
      include: [
        { model: User, attributes: { exclude: ['encryptedPassword'] } },
      ],
      order: [['createdAt', 'DESC']],
    })
    return res.status(200).json(allOrders)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}
const createOder = async (req, res) => {
  const { shippingAddress, userId } = req.body
  try {
    await Order.findOrCreate({
      where: {
        userId: userId,
      },
      defaults: {
        cancelOrder: 0,
        shippingAddress: shippingAddress,
        status: 'Pending',
      },
    })
    return res.status(201).json({ msg: 'Order has been created successfully!' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server error' })
  }
}

const deleteOrder = async (req, res) => {
  const { id } = req.params
  try {
    await Order.destroy({ where: { id: id } })
    return res.status(200).json({ msg: 'Delete order successfully!' })
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

const searchOrder = async (req, res) => {
  const { keyword } = req.params
  try {
    const result = await Order.findAll({
      where: {
        [Op.or]: [
          { shippingAddress: { [Op.substring]: keyword } },
          { status: { [Op.substring]: keyword } },
        ],
      },
      include: [
        { model: User, attributes: { exclude: ['encryptedPassword'] } },
      ],
    })
    return res.status(200).json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

module.exports = { showAllOrder, deleteOrder, createOder, searchOrder }
