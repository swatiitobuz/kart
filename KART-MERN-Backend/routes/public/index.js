import express from 'express'
import userRoute from './user.route.js'
import productRoute from './product.route.js'

const router = express.Router()

router.use('/auth', userRoute)
router.use('/products', productRoute)


export default router
