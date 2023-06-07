import express from 'express'

import paymentRoute from './payment.route.js'
import orderRoute from './order.route.js'

const router = express.Router()

router.use('/orders', orderRoute)
router.use('/payment', paymentRoute)

export default router
