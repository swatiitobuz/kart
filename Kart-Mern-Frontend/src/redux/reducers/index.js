import { combineReducers } from 'redux'
import {
    getAllProductsReducer,
    getSingleProductReducer,
    addToWishlistReducer,
    getWishlistReducer,
    checkIfWishlistReducer,
    deleteFromWishlistReducer,
    addToCartReducer,
    getCartReducer,
    deleteCartProductReducer,
    searchProductReducer,
    addRatingsReducer
} from './productReducer'
import { userSigninReducer, userSignupReducer, getSingleUserReducer, resetPasswordReducer } from './userReducer'
import {
    createOrderReducer,
    getAllOrderReducer,
    cancelOrderReducer,
    searchProductsInOrderReducer
} from './orderReducer'


const rootReducer = combineReducers({
    signUpUser: userSignupReducer,
    signInUser: userSigninReducer,
    getSingleUser: getSingleUserReducer,
    resetPassword: resetPasswordReducer,


    getAllProducts: getAllProductsReducer,
    getSingleProduct: getSingleProductReducer,
    addToWishlist: addToWishlistReducer,
    getWishlist: getWishlistReducer,
    checkIfWishlist: checkIfWishlistReducer,
    deleteFromWishlist: deleteFromWishlistReducer,
    addToCart: addToCartReducer,
    getCart: getCartReducer,
    deleteProductFromCart: deleteCartProductReducer,


    createOrder: createOrderReducer,
    getAllOrder: getAllOrderReducer,
    cancelOrder: cancelOrderReducer,
    searchProduct: searchProductReducer,
    searchProductsInOrder: searchProductsInOrderReducer,
    addRatings: addRatingsReducer
})

export default rootReducer
