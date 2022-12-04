const express = require('express')
const md5 = require('md5')
const setAssociation = require('./Models/association')
const app = express()
const userRouter = require('./Routers/user.router')
var cors = require('cors')
app.use(cors())

app.get('/create-database', (req, res) => {
  setAssociation()
  return res.status(200).json({ msg: 'Create database successfully!' })
})
// setAssociation()

// console.log(md5('12345678'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', userRouter)

const port = 8080

app.listen(port, () => {
  console.log(`You are running at port: ${port}`)
})
