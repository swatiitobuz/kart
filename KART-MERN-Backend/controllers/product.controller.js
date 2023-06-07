import productModel from '../models/product.model.js'
import wishlistModel from '../models/wishlist.model.js'
import cartModel from '../models/cart.model.js'
// import mongoose from 'mongoose'
import env from 'dotenv'
import isEmpty from '../utils/isEmpty.js'
import userModel from '../models/user.model.js'

env.config()

// @route: POST /public/products/add-product
// @desc: Add product
// @access: Public
export const addProduct = async (req, res) => {
    try {
        const {
            title,
            description,
            price,
            category,
            featureimg,
            brand,
            size,
            color,
            countInStock,
            type,
            metaTags
        } = req.body


        const product = await productModel.create({
            title,
            description,
            price,
            category,
            featureimg,
            brand,
            size,
            color,
            countInStock,
            type,
            metaTags
        })

        res.status(200).json({
            success: true,
            message: "Product added successfully",
            product
        })


    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// @route: PUT /public/products/update-product/:id
// @desc: Update product
// @access: Public
export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id

        const {
            title,
            description,
            price,
            category,
            image,
            brand
        } = req.body

        const product = await productModel.findById(id)

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        else {

            product.title = title || product.title
            product.description = description || product.description
            product.price = price || product.price
            product.category = category || product.category
            product.image = image || product.image
            product.brand = brand || product.brand

            res.status(200).json({
                success: true,
                message: "Product updated successfully",
                product
            })
        }

    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// @route: DELETE /public/products/delete-product/:id
// @desc: Delete product
// @access: Public
export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id

        const product = await productModel.findByIdAndDelete(id)

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully",
                product
            })
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// @route: GET /public/products/all?category=category
// @desc: Get all products
// @access: Public
export const getAllProducts = async (req, res) => {
    try {
        const { category } = req.query
        const products = await productModel.find()
        if (category) {
            // check category in product's category array
            const filteredProducts = products.filter(product => product.category.includes(category))
            res.status(200).json({
                success: true,
                products: filteredProducts
            })

        }
        else {
            res.status(200).json({
                success: true,
                products
            })
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// @route: GET /public/products/get-single-product/:id
// @desc: Get single product
// @access: Public
export const getSingleProduct = async (req, res) => {
    try {
        const id = req.params.id

        const product = await productModel.findById(id)

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        else {
            res.status(200).json({
                success: true,
                product
            })
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// @route: POST /public/products/add-to-wishlist/:userId/:productId
// @desc: Add product to wishlist
// @access: Public
export const addToWishlist = async (req, res) => {
    try {
        const userId = req.params.userId
        const productId = req.params.productId

        const product = await productModel.findById(productId)
        const checkUser = await userModel.findById(userId)

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        else if (!checkUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        else {
            const wishlist = await wishlistModel.create({
                user: userId,
                product: productId
            })

            res.status(200).json({
                success: true,
                message: "Product added to wishlist successfully",
                wishlist
            })
        }

    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// @route: POST /public/products/wishlist/:userid
// @desc: Get wishlist
// @access: Public
export const getWishlist = async (req, res) => {
    try {

        const { id } = req.params

        const wishlist = await wishlistModel.find({ user: id }).populate('product')

        if (!wishlist) {
            return res.status(404).json({
                success: false,
                message: "Wishlist not found"
            })
        }
        else {
            res.status(200).json({
                success: true,
                wishlist
            })
        }

    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// @route: DELETE /public/products/remove-from-wishlist/:userid/:productId
// @desc: Delete wishlist
// @access: Public

export const removeFromWishlist = async (req, res) => {
    try {

        const userId = req.params.userId
        const productId = req.params.productId

        //find by id in wishlist
        const checkWishlist = await wishlistModel.find({ user: userId })

        if (!checkWishlist) {
            res.status(404).json({
                success: false,
                message: "Wishlist not found"
            })
        }
        else {
            //    delete productId
            const wishlist = await wishlistModel.findOneAndDelete({ user: userId, product: productId })
            console.log(wishlist);
            res.status(200).json({
                success: true,
                message: "Product removed from wishlist successfully",
                wishlist
            })

        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// @route: POST /public/products/check-product-in-wishlist/:userId/:productId
// @desc: Check product in wishlist
// @access: Public
export const checkProductInWishlist = async (req, res) => {
    try {
        const userId = req.params.userId
        const productId = req.params.productId

        const checkWishlist = await wishlistModel.findOne({ user: userId, product: productId })

        if (!checkWishlist) {
            return res.status(200).json({
                success: true,
                message: "Product not found in wishlist",
                isPresent: false
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: "Product found in wishlist",
                isPresent: true
            })
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// @route: POST /public/products/add-to-cart/:userId/:productId
// @desc: Add product to cart
// @access: Public
export const addToCart = async (req, res) => {
    try {
        const userId = req.params.userId
        const productId = req.params.productId

        const product = await productModel.findById(productId)

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        else {
            // check cart if something present replace with current one
            const checkCart = await cartModel.findOne({ user: userId })

            if (!checkCart) {
                const cart = await cartModel.create({
                    user: userId,
                    product: productId
                })

                res.status(200).json({
                    success: true,
                    message: "Product added to cart successfully",
                    cart
                })
            }
            else {
                const cart = await cartModel.findOneAndUpdate({ user: userId }, { product: productId }, { new: true })

                res.status(200).json({
                    success: true,
                    message: "Product added to cart successfully",
                    cart
                })
            }
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// @route: POST /public/products/cart/:userid
// @desc: Get cart
// @access: Public
export const getCart = async (req, res) => {
    try {
        const {
            id
        } = req.params
        const cart = await cartModel.find({ user: id }).populate('product')
        res.status(200).json({
            success: true,
            cart
        })

    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// @route: DELETE /public/products/remove-from-cart/:userid/:productId
// @desc: Delete cart
// @access: Public
export const removeFromCart = async (req, res) => {
    try {

        const userId = req.params.userId
        const productId = req.params.productId

        //find by id in cart
        const checkCart = await cartModel.find({ user: userId })

        if (!checkCart) {
            res.status(404).json({
                success: false,
                message: "Cart not found"
            })
        }
        else {
            const cart = await cartModel.findOneAndDelete({
                user: userId,
                product: productId
            })

            res.status(200).json({
                success: true,
                message: "Product removed from cart successfully",
                cart
            })
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// @route: POST /public/products/search?keyword=
// @desc: Search products
// @access: Public
export const searchProducts = async (req, res) => {
    try {
        const keyword = req.query.keyword
        const products = await productModel.find({ 
            $or: [
                { name: { $regex: keyword, $options: 'i' } },
                { description: { $regex: keyword, $options: 'i' } },
                { metaTags: { $regex: keyword, $options: 'i' } }
            ]
         })
        res.status(200).json({
            success: true,
            products
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
