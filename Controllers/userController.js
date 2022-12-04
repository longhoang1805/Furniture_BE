const { Op } = require('sequelize')
const md5 = require('md5')
const User = require('../Models/User')
const { sign } = require('jsonwebtoken')
const Role = require('../Models/Role')
require('dotenv').config()
const signUp = async (req, res) => {
  const { firstName, lastName, address, email, phone, password } = req.body

  try {
    //check data
    const existedUser = await User.findOne({
      where: {
        [Op.or]: [{ email: email }, { phone: phone }],
      },
    })
    if (existedUser) {
      return res
        .status(400)
        .json({ msg: 'Already existed email or phone number' })
    }
    //create user

    const newUser = await User.create({
      first_name: firstName,
      last_name: lastName,
      address: address,
      email: email,
      phone: phone,
      encryptedPassword: md5(password),
    })
    res.status(201).json({ msg: 'User has been created successfully!' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server error' })
  }
}

const generateToken = (payload) => {
  const { id, email, phone, role } = payload
  const accessToken = sign({ id, email, phone, role }, process.env.JWT_SECRET, {
    expiresIn: '30 days',
  })
  const refreshToken = sign({ id }, 'shhhh', {
    expiresIn: '45 days',
  })
  return { accessToken, refreshToken }
}

const signIn = async (req, res) => {
  const { email, password } = req.body

  try {
    const userCollection = await User.findOne({
      where: {
        email: email,
        encryptedPassword: md5(password),
      },
    })
    if (userCollection) {
      const tokens = generateToken(userCollection)

      return res.status(200).json({
        msg: 'Login successfully',
        tokens,
      })
    }
    res
      .status(201)
      .json({ msg: 'Login failed! Please check your email or password.' })
  } catch (error) {
    res.status(500).json({ msg: 'Server error!' })
  }
}

const showAllUser = async (req, res) => {
  try {
    const allUsers = await User.findAll({ where: { RoleId: 1 } })
    return res.status(200).json(allUsers)
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

const updateUser = async (req, res) => {
  const { firstName, lastName, address, email, phone, password } = req.body
  const { id } = req.params
  try {
    await User.update(
      {
        first_name: firstName,
        last_name: lastName,
        address: address,
        email: email,
        phone: phone,
        encryptedPassword: md5(password),
        // RoleId: 1,
      },
      {
        where: {
          id: id,
        },
      }
    )
    res.status(200).json({ msg: 'User has been updated successfully!' })
  } catch (error) {
    return res.status(500).json({ msg: 'Server err when update user' })
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    await User.destroy({ where: { id: id } })
    return res.status(200).json({ msg: 'Delete user successfully!' })
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

//search have problem
const searchUser = async (req, res) => {
  const { keyword } = req.query
  try {
    const searchUserResults = await User.findAll({
      where: {
        [Op.or]: [
          { first_name: keyword },
          { last_name: keyword },
          {
            [Op.and]: [{ first_name: keyword }, { last_name: keyword }],
          },
        ],
      },
    })
    return res.status(200).json(searchUserResults)
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

module.exports = {
  signUp,
  signIn,
  showAllUser,
  updateUser,
  deleteUser,
  searchUser,
}
