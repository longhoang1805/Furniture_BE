const { Op, or } = require('sequelize')
const md5 = require('md5')
const Order = require('../Models/Order')
const User = require('../Models/User')
const Product = require('../Models/Product')
const OrderDetail = require('../Models/OrderDetail')
const Payment = require('../Models/Payment')
const PaymentMethod = require('../Models/PaymentMethod')
const ImageProduct = require('../Models/ImageProduct')

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

const showDashboardOrder = async (req, res) => {
  try {
    const allOrders = await Order.findAll({
      include: [User],
      order: [['createdAt', 'DESC']],
    })

    // handle each month
    // const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // let dataChart =[]
    allOrders.forEach((order) => {
      // months.forEach(mo => {
      //   if (new Date(order.createdAt).getMonth() + 1 === mo) {
      //     dataChart.push({
      //       id: order.id,
      //       month: mo,
      //     })
      //   }
      // })
      // await Order.findAndCountAll({where: {c}})
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

const getOrderDetail = async (req, res) => {
  const { orderId } = req.params
  try {
    const order = await Order.findOne({
      where: {
        id: orderId,
      },
      include: [
        {
          model: User,
          attributes: ['id', 'firstName', 'lastName', 'email', 'phone'],
        },
      ],
    })
    const orderDetail = await OrderDetail.findAll({
      where: {
        orderId: orderId,
      },
      attributes: ['quantity'],
      include: [{ model: Product, attributes: ['name', 'salePrice', 'id'] }],
    })

    const arrOrderDetail = []
    orderDetail.forEach(async (detail) => {
      const img = await ImageProduct.findOne({
        attributes: ['url'],
        where: { productId: detail.Product.id },
      })
      arrOrderDetail.push({
        quantity: detail.quantity,
        Product: {
          name: detail.Product.name,
          salePrice: detail.Product.salePrice,
          id: detail.Product.id,
          imageUrl: img.url,
        },
      })
    })

    const payment = await Payment.findOne({
      where: {
        orderId: orderId,
      },
      attributes: ['id', 'totalPrice'],
      include: [{ model: PaymentMethod, attributes: ['method'] }],
    })
    return res
      .status(200)
      .json({ order, payment: payment, orderDetail: arrOrderDetail })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const getPendingOrdersByUserId = async (req, res) => {
  // const { userId } = req.params
  try {
    const userOrder = await Order.findOne({ where: { userId: req.user.id } })
    if (userOrder) {
      const myOrders = []
      const pendingOrders = await Order.findAll({
        where: {
          [Op.and]: [
            { userId: req.user.id },
            { status: 'Pending' },
            { cancelOrder: 0 },
          ],
        },
        include: [
          {
            model: User,
            attributes: ['firstName', 'lastName', 'email', 'phone'],
          },
        ],
        order: [['createdAt', 'DESC']],
      })
      // console.log(pendingOrders)
      // pendingOrders.forEach(async (order) => {
      //   const orderDetail = await OrderDetail.findAll({
      //     //tra ve 1 mang
      //     attributes: ['quantity', 'productId'],
      //     where: { orderId: order.id },
      //     include: ['Product'],
      //   })

      // console.log(orderDetail)
      // console.log('---------------')
      // orderDetail.forEach(async (orderDetail1) => {
      //   const imageUrl = await ImageProduct.findOne({
      //     attributes: ['url'],
      //     where: { productId: orderDetail1.Product.id },
      //   })
      //   console.log(imageUrl)
      // })

      // myOrders.push({
      //   shippingAddress: order.shippingAddress,
      //   phoneNumber: order.User.phone,
      //   // quantity: orderDetail.quantity,
      //   // Product: {
      //   //   name: orderDetail.Product.name,
      //   //   // imageUrl: orderDetail.imageUrl.url,
      //   // },
      // })

      //   console.log('-----------------------')
      //   console.log(myOrders)
      // })

      if (pendingOrders.length > 0) {
        return res.status(200).json(pendingOrders)
      } else {
        return res
          .status(200)
          .json({ msg: 'You don\t t have any pending orders ' })
      }
    } else {
      return res.status(200).json({ msg: "You don't have any pending orders " })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}
const getShippingOrdersByUserId = async (req, res) => {
  // const { userId } = req.params
  try {
    const shippingOrders = await Order.findAll({
      where: {
        [Op.and]: [
          { userId: req.user.id },
          { status: 'Shipping' },
          { cancelOrder: 0 },
        ],
      },
      include: [
        {
          model: User,
          attributes: ['firstName', 'lastName', 'email', 'phone'],
        },
      ],
      order: [['createdAt', 'DESC']],
    })
    if (shippingOrders.length > 0) {
      return res.status(200).json(shippingOrders)
    } else {
      return res
        .status(200)
        .json({ msg: "You don't have any shipping orders " })
    }
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}
const getDeliveredOrdersByUserId = async (req, res) => {
  const { userId } = req.params
  try {
    const deliveredOrders = await Order.findAll({
      where: {
        [Op.or]: [
          { [Op.and]: [{ userId: userId || req.user.id }, { cancelOrder: 1 }] },
          {
            [Op.and]: [
              { userId: userId || req.user.id },
              { status: 'Delivered' },
              { cancelOrder: 0 },
            ],
          },
        ],
      },
      include: [
        {
          model: User,
          attributes: ['firstName', 'lastName', 'email', 'phone'],
        },
      ],
      order: [['createdAt', 'DESC']],
    })
    if (deliveredOrders.length > 0) {
      return res.status(200).json(deliveredOrders)
    } else {
      return res
        .status(200)
        .json({ msg: "You don't have any delivered/cancel orders " })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const updateStatus = async (req, res) => {
  const { orderId } = req.params
  const { status } = req.body
  try {
    await Order.update({ status: status }, { where: { id: orderId } })
    return res.status(200).json({ msg: 'Update status order successfully!' })
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

const updateCancelOrder = async (req, res) => {
  const { orderId } = req.params
  try {
    await Order.update({ cancelOrder: 1 }, { where: { id: orderId } })
    return res.status(200).json({ msg: 'Order canceled successfully' })
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

module.exports = {
  showAllOrder,
  deleteOrder,
  createOder,
  searchOrder,
  getOrderDetail,
  updateStatus,
  updateCancelOrder,
  showDashboardOrder,
  getPendingOrdersByUserId,
  getShippingOrdersByUserId,
  getDeliveredOrdersByUserId,
}
