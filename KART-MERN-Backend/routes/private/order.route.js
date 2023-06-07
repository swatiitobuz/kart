import express from 'express'
import { createOrder, getAllOrder, cancelOrder,searchOrder,filterOrder } from '../../controllers/order.controller.js'

const router = express.Router()

router.post('/new', createOrder)
router.get('/all/:userId', getAllOrder)
router.delete('/cancel/:id', cancelOrder)
router.get('/:userId/search', searchOrder)
router.get('/:userId/filter', filterOrder)

export default router
