import express from 'express';

import {
    addProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getSingleProduct,
    addToWishlist,
    getWishlist,
    checkProductInWishlist,
    removeFromWishlist,
    removeFromCart,
    searchProducts,
    addToCart,
    getCart,
} from '../../controllers/product.controller.js'

import {
    addReview
} from '../../controllers/rating.controller.js'

const router = express.Router()

router.get('/all', getAllProducts)
router.get('/get-single-product/:id', getSingleProduct)
router.get('/wishlist-products/:id', getWishlist)
router.get('/cart-products/:id', getCart)
router.get('/search', searchProducts)
router.get('/check-product-in-wishlist/:userId/:productId', checkProductInWishlist)

router.post('/add-product-to-wishlist/:userId/:productId', addToWishlist)
router.post('/add-to-cart/:userId/:productId', addToCart)
router.post('/add-product', addProduct)

router.put('/update-product/:id', updateProduct)

router.post('/remove-from-wishlist/:userId/:productId', removeFromWishlist)
router.delete('/remove-from-cart/:userId/:productId', removeFromCart)
router.delete('/delete-product/:id', deleteProduct)

router.post('/add-review/:id', addReview)

export default router