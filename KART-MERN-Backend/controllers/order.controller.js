import productModel from '../models/product.model.js'
// import mongoose from 'mongoose'
import env from 'dotenv'
import cartModel from '../models/cart.model.js'
import userModel from '../models/user.model.js'
import orderModel from '../models/order.model.js'

env.config()


/**
 * @description create a order
 * @route POST /private/orders/new
 * @access private
 */
export const createOrder = async (req, res) => {
    try {
        const {
            userId,
            productId,
            quantity,
            amount,
            address
        } = req.body

        const user = await userModel.findById(userId)
        const product = await productModel.findById(productId)

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        if (!product) {
            return res.status(400).json({
                success: false,
                message: "Product not found"
            })
        }

        const order = new orderModel({
            user: userId,
            product: productId,
            quantity,
            amount,
            address
        })

        console.log(product.countInStock);

        product.countInStock -= 1
        console.log(product.countInStock, "after");

        await product.save()

        const createdOrder = await order.save()


        if (createdOrder) {

            // remove product from cart by id

            const cart = await cartModel.findOneAndDelete({ user: userId }, { product: productId })

            return res.status(200).json({
                success: true,
                message: "Order created successfully",
                data: createdOrder
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: "Order not created"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

/**
 * @description get all order
 * @route POST /private/orders/all/id
 * @access private
 */
export const getAllOrder = async (req, res) => {
    try {
        const { userId } = req.params

        const user = await userModel.findById(userId)

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        const orders = await orderModel.find({ user: userId }).populate('product')

        if (orders) {
            //   return orders by sorting
            const sorted = orders.sort((a, b) => b.createdAt - a.createdAt)

            return res.status(200).json({
                success: true,
                message: "Order found",
                data: sorted
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: "Order not found"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

/**
 * @description cancel order
 * @route POST /private/orders/cancel/:id
 * @access private
 */
export const cancelOrder = async (req, res) => {
    try {
        const { id } = req.params

        const order = await orderModel.findById(id)

        if (!order) {
            return res.status(400).json({
                success: false,
                message: "Order not found"
            })
        }

        const cancelledOrder = await orderModel.findById(id)

        cancelledOrder.status = "cancelled"

        const cancelled = await cancelledOrder.save()

        if (cancelled) {
            return res.status(200).json({
                success: true,
                message: "Order cancelled successfully"
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: "Order not cancelled"
            })
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

/**
 * @description search in order
 * @route GET /private/orders/${userId}/search?keyword=${q}
 * @access private
 */
export const searchOrder = async (req, res) => {
    try {
        const { userId } = req.params
        const { keyword } = req.query

        const user = await userModel.findById(userId)

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        const orders = await orderModel.find({ user: userId }).populate('product')

        if (orders) {
            const search = orders.filter(order => order.product.title.toLowerCase().includes(keyword.toLowerCase()))

            return res.status(200).json({
                success: true,
                message: "Order found",
                data: search
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: "Order not found"
            })
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


/**
 * @description filter orders
 * @route GET /private/orders/${userId}/filter?status=
 * @access private
 */
export const filterOrder = async (req, res) => {
    try {
        const { userId } = req.params
        const { status } = req.query

        const user = await userModel.findById(userId)

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        const orders = await orderModel.find({ user: userId }).populate('product')

        if (orders) {
            const filter = orders.filter(order => order.status.toLowerCase().includes(status.toLowerCase()))

            return res.status(200).json({
                success: true,
                message: "Order found",
                data: filter
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: "Order not found"
            })
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}