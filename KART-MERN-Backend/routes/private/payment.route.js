import express from 'express'
import { initPayment,paymentSuccess } from '../../controllers/payment.controller.js'

const router = express.Router()

router.post('/razorpay/init', initPayment);
router.post('/razorpay/success', paymentSuccess);

export default router
