const { Op } = require('sequelize')
const nodemailer = require('nodemailer')
const md5 = require('md5')
const User = require('../Models/User')
const { sign } = require('jsonwebtoken')
require('dotenv').config()
const { verify } = require('jsonwebtoken')
// const crypto = require("crypto");
const SHA256 = require('crypto-js/sha256')

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
      firstName: firstName,
      lastName: lastName,
      address: address,
      email: email,
      phone: phone,
      encryptedPassword: md5(password),
    })
    return res.status(201).json({ msg: 'User has been created successfully!' })
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
    const allUsers = await User.findAndCountAll({
      limit: parseInt(req.query.limit),
      offset: parseInt(req.query.offset),
      where: { role: 1 },
    })
    return res.status(200).json(allUsers)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const updateUser = async (req, res) => {
  const { firstName, lastName, address, phone } = req.body
  const { id } = req.params
  try {
    await User.update(
      {
        firstName: firstName,
        lastName: lastName,
        address: address,
        phone: phone,
      },
      {
        where: {
          id: id,
        },
      }
    )
    const updatedUser = await User.findOne({
      where: { id: id },
      attributes: [
        'id',
        'firstName',
        'lastName',
        'role',
        'address',
        'email',
        'phone',
      ],
    })
    return res
      .status(200)
      .json({ msg: 'User has been updated successfully!', updatedUser })
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
  const { keyword } = req.params
  try {
    const result = await User.findAll({
      where: {
        [Op.and]: [
          { role: 1 },
          {
            [Op.or]: [
              { firstName: { [Op.substring]: keyword } },
              { lastName: { [Op.substring]: keyword } },
              { address: { [Op.substring]: keyword } },
              { email: { [Op.substring]: keyword } },
              { phone: { [Op.substring]: keyword } },
            ],
          },
        ],
      },
    })
    return res.status(200).json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Server err' })
  }
}

const getUserById = async (req, res) => {
  const { id } = req.params
  try {
    const userById = await User.findOne({
      where: {
        id: id,
      },
    })
    return res.status(200).json(userById)
  } catch (error) {
    return res.status(500).json({ msg: 'Server err' })
  }
}

const validateToken = async (req, res) => {
  const inputToken = req.headers['x-accesstoken']
  try {
    const dataObj = verify(inputToken, process.env.JWT_SECRET)
    const currentUser = await User.findOne({
      attributes: [
        'id',
        'firstName',
        'lastName',
        'role',
        'address',
        'email',
        'phone',
      ],
      where: {
        id: dataObj.id,
        email: dataObj.email,
        phone: dataObj.phone,
      },
    })
    if (currentUser) {
      req.user = currentUser
      return res.status(200).json(currentUser)
    }
    //not exist
    return res.status(403).json({ msg: 'Forbidden!' })
  } catch (error) {
    return res.status(401).json({ msg: 'Server error' })
  }
}

const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body
  try {
    const result = await User.findOne({
      where: {
        [Op.and]: [
          { id: req.user.id },
          { encryptedPassword: md5(currentPassword) },
        ],
      },
    })
    if (result) {
      const newPass = await User.update(
        {
          encryptedPassword: md5(newPassword),
        },
        {
          where: {
            id: req.user.id,
          },
        }
      )
      return res.status(200).json({ msg: 'Change password successfully!' })
    }
    return res
      .status(201)
      .json({ msg: 'Current password is incorrect! Please try again' })
  } catch (error) {
    return res.status(200).json({ msg: 'Server error' })
  }
}

const forgetPassword = async (req, res) => {
  const { email } = req.body
  let newPass = (Math.random() + 1).toString(36)
  console.log('random', newPass)

  // let newPass2 = SHA256(newPass)
  // console.log('SHA256', newPass2)

  const user = await User.findOne({
    where: {
      email: email,
    },
  })
  if (!user) {
    return res
      .status(201)
      .json({ msg: 'User with this email does not exists.' })
  }
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.HOST_EMAIL_USER,
      pass: process.env.HOST_EMAIL_PASSWORD,
    },
  })
  htmlContent = `
  <h1 style="color:">Thank you for your shopping ${email}</h1>
  <p>This is your new password: <b> ${newPass} </b></p>
  <p>Don't share this with anyone!</p>
  <p>------------------------------------</p>
  <p><b>---Furniture Onile Store---</b></p>
  `
  //Send mail
  try {
    await transporter.sendMail({
      to: email,
      subject: 'Furniture Online Store - Reset password',
      from: process.env.HOST_EMAIL_USER,
      text: 'This is reset password link',
      html: htmlContent,
    })
    // return res.status(200).json({ msg: 'Send email thanh cong!' })
    await User.update(
      {
        encryptedPassword: md5(newPass),
      },
      { where: { email: email } }
    )
    return res.status(200).json({ msg: 'Send email thanh cong!' })
  } catch (error) {
    res.status(500).json({ msg: 'Send mail err' })
  }
}

module.exports = {
  signUp,
  signIn,
  showAllUser,
  updateUser,
  deleteUser,
  searchUser,
  getUserById,
  validateToken,
  changePassword,
  forgetPassword,
}
