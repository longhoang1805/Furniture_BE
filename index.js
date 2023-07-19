const express = require('express')
const md5 = require('md5')
const setAssociation = require('./Models/association')
const app = express()
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const userRouter = require('./Routers/user.router')
const orderRouter = require('./Routers/order.router')
const categoryRouter = require('./Routers/category.router')
const commentRouter = require('./Routers/comment.router')
const dataRouter = require('./Routers/data.router')
const productRouter = require('./Routers/product.router')
const manufacturerRouter = require('./Routers/manufacturer.router')
const stripeRouter = require('./Routers/stripe.router')

var cors = require('cors')
var path = require('path')
app.use(cors())

//static Images folder
app.use('/Images', express.static(path.join(__dirname, 'Images')))

app.get('/', (req, res) => {
  return res.status(200).json({ msg: 'Hello world!' })
})

console.log(md5('12345678'));

app.get('/create-database', (req, res) => {
  setAssociation()
  return res.status(200).json({ msg: 'Create database successfully!' })
})

setAssociation()

console.log(md5('12345678'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API',
      description: 'API infomation',
      contact: {
        name: 'Amazing developer',
      },
      servers: ['http://localhost:8080'],
    },
  },
  apis: ['.Routers/*.js', 'index.js', './Routers/user.router.js'],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// Routes
/**
 * @swagger
 * /test-swagger:
 *  get:
 *    description: test
 *    response:
 *      '200':
 *        description: A successful response
 */
app.get('/test-swagger', (req, res) => {
  res.status(200).send('Oke')
})

/**
 * @swagger
 * /api/v1/users
 */
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/categories', categoryRouter)
app.use('/api/v1/comments', commentRouter)
app.use('/api/v1/manufacturers', manufacturerRouter)
app.use('/api/v1/stripe', stripeRouter)

app.use('/api/v1/data', dataRouter)

const port = 8080

app.listen(port, () => {
  console.log(`You are running at port: ${port}`)
})
