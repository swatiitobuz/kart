import express from 'express'
import env from 'dotenv'

// IMPORT DB CONNECTION
import mongodbConnection from './config/db.js'

// IMPORT ALL MIDDILEARES
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import ExpressMongoSanitize from 'express-mongo-sanitize'

//IMPORT ALL ROUTES
import homeRoute from './routes/home.route.js'
import PrivateRouter from './routes/private/index.js'
import PublicRouter from './routes/public/index.js'

const app = express()
env.config()

// set security HTTP headers
app.use(helmet())

// prevent http parameter pollution
app.disable('x-powered-by')
// parse urlencoded request body
app.use(express.urlencoded({ limit: '69mb' }))
app.use(express.urlencoded({ extended: true }))
// parse json request body
app.use(express.json())
app.use(ExpressMongoSanitize())

// enable cors
const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors())
app.options('*', cors())

// Mongodb connection
mongodbConnection()

// Middleware
app.use(morgan('dev'))

// HOME ROUTE
app.use('/', homeRoute)

// PRIVATE ROUTE
app.use('/private', PrivateRouter)
app.use('/public', PublicRouter)

// Server Listen
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
