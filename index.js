const express = require('express')
const md5 = require('md5')
const setAssociation = require('./Models/association')
const app = express()
const userRouter = require('./Routers/user.router')
const orderRouter = require('./Routers/order.router')
const categoryRouter = require('./Routers/category.router')
const commentRouter = require('./Routers/comment.router')
const dataRouter = require('./Routers/data.router')
const productRouter = require('./Routers/product.router')
const manufacturerRouter = require('./Routers/manufacturer.router')

var cors = require('cors')
app.use(cors())

//static Images folder
app.use('Images', express.static('./Images'))

app.get('/', (req, res) => {
  return res.status(200).json({ msg: 'Hello world!' })
})

app.get('/create-database', (req, res) => {
  setAssociation()
  return res.status(200).json({ msg: 'Create database successfully!' })
})

setAssociation()

console.log(md5('12345678'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/categories', categoryRouter)
app.use('/api/v1/comments', commentRouter)
app.use('/api/v1/manufacturers', manufacturerRouter)

app.use('/api/v1/data', dataRouter)

const port = 8080

app.listen(port, () => {
  console.log(`You are running at port: ${port}`)
})
