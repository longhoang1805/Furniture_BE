const { verify } = require('jsonwebtoken')
const User = require('../Models/User')
require('dotenv').config()
const verifyToken = async (req, res, next) => {
  const inputToken = req.headers['x-accesstoken']
  //verify token
  try {
    const dataObj = verify(inputToken, process.env.JWT_SECRET)
    const currentUser = await User.findOne({
      where: {
        id: dataObj.id,
        email: dataObj.email,
        phone: dataObj.phone,
      },
    })
    if (currentUser) {
      // console.log(currentUser)
      //dem id den de check role
      req.user = currentUser
      // req.id = currentUser.id
      // req.roleId = currentUser.RoleId
      // req.email = currentUser.email
      next()
      return
    }
    //not exist
    return res.status(403).json({ msg: 'Forbidden!' })
  } catch (error) {
    console.log(error)
    return res.status(401).json({ msg: 'Token is not valid' })
  }
}

const isAdmin = async (req, res, next) => {
  const role = req.user.role
  console.log(role)
  if (role == 2) {
    next()
    return
  }
  return res.status(403).json({ message: 'This action required Admin role' })
}

module.exports = { verifyToken, isAdmin }
