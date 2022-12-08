const md5 = require('md5')
const User = require('../Models/User')
const Category = require('../Models/Category')

const createDataUser = async (req, res) => {
  // const { firstName, lastName, address, email, phone, role, pwd } = req.body

  try {
    const newUsers = User.bulkCreate([
      {
        firstName: 'Phuoc',
        lastName: 'Thai',
        address: 'Ha Tinh',
        email: 'thaiphuoc@gmail.com',
        phone: '036473872',
        role: 1,
        encryptedPassword: md5('12345678'),
      },
      {
        firstName: 'Nam',
        lastName: 'Hoang',
        address: 'Thanh Hoa',
        email: 'hnam@gmail.com',
        phone: '0328567826',
        role: 1,
        encryptedPassword: md5('12345678'),
      },
    ])
      .then(() => {
        return User.findAll()
      })
      .then((users) => {
        console.log(users)
      })
    return res
      .status(200)
      .json({ msg: 'Create new user successfully', newUsers })
  } catch (error) {
    console.log(error)
    return res.status(400).json({ msg: 'Server error' })
  }
}

const createDataCategory = async (req, res) => {
  try {
    const newCategories = Category.bulkCreate([
      {
        type: 'Kitchen',
      },
      {
        type: 'Working room',
      },
      {
        type: 'Bath room',
      },
      {
        type: 'Kid room',
      },
      {
        type: 'Wood furniture',
      },
      {
        type: 'Sofa',
      },
      {
        type: 'Cloth furniture',
      },
      {
        type: 'Kitchen tools',
      },
      {
        type: 'table',
        // categoryId: 'table',
      },
      {
        type: 'Chair',
        // categoryId: 'table',
      },
      {
        type: 'Mirror',
        // categoryId: 'table',
      },
    ])
      .then(() => {
        return Category.findAll()
      })
      .then((category) => {
        console.log(category)
      })
    return res
      .status(200)
      .json({ msg: 'Create new category successfully', newCategories })
  } catch (error) {
    console.log(error)
    return res.status(400).json({ msg: 'Server error' })
  }
}
module.exports = { createDataUser, createDataCategory }
