import {

    GET_ALL_PRODUCT_REQUEST,
    GET_ALL_PRODUCT_SUCCESS,
    GET_ALL_PRODUCT_FAILED,
    GET_SINGLE_PRODUCT_REQUEST,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_FAILED,
    ADD_TO_WISHLIST_REQUEST,
    ADD_TO_WISHLIST_SUCCESS,
    ADD_TO_WISHLIST_FAILED,
    GET_WISHLIST_REQUEST,
    GET_WISHLIST_SUCCESS,
    GET_WISHLIST_FAILED,
    CHECK_IF_WISHLIST_REQUEST,
    CHECK_IF_WISHLIST_SUCCESS,
    CHECK_IF_WISHLIST_FAILED,
    DELETE_FROM_WISHLIST_REQUEST,
    DELETE_FROM_WISHLIST_SUCCESS,
    DELETE_FROM_WISHLIST_FAILED,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILED,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAILED,
    SEARCH_PRODUCT_REQUEST,
    SEARCH_PRODUCT_SUCCESS,
    SEARCH_PRODUCT_FAILED,
    DELETE_PRODUCT_FROM_CART_REQUEST,
    DELETE_PRODUCT_FROM_CART_SUCCESS,
    DELETE_PRODUCT_FROM_CART_FAILED,
    ADD_RATING_REQUEST,
    ADD_RATING_SUCCESS,
    ADD_RATING_FAILED
} from '../constants/productConstants'
import axios from 'axios'

const API = process.env.REACT_APP_NODE_API

// GET ALL PRODUCTS
export const getAllProducts = (category) => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_PRODUCT_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/products/all?category=${category}`, config)
        dispatch({
            type: GET_ALL_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_PRODUCT_FAILED,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// GET SINGLE PRODUCT BY ID
export const getSingleProduct = (id) => async (dispatch) => {

    try {
        dispatch({
            type: GET_SINGLE_PRODUCT_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/products/get-single-product/${id}`, config)
        dispatch({
            type: GET_SINGLE_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_SINGLE_PRODUCT_FAILED,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message
                : error.message
        })
    }
}

// ADD PRODUCT TO WISHLIST
export const addToWishlist = (userId, productId) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_TO_WISHLIST_REQUEST
        })
        const config = {
            'Content-Type': 'application/json',

        }
        const { data } = await axios.post(`${API}/public/products/add-product-to-wishlist/${userId}/${productId}`, config)
        dispatch({
            type: ADD_TO_WISHLIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADD_TO_WISHLIST_FAILED,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message
                : error.message
        })
    }
}

// GET WISHLIST
export const getWishlist = (userId) => async (dispatch) => {
    try {
        dispatch({
            type: GET_WISHLIST_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/products/wishlist-products/${userId}`, config)
        dispatch({
            type: GET_WISHLIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_WISHLIST_FAILED,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message
                : error.message
        })
    }
}

// CHECK IF PRODUCT IS IN WISHLIST
export const checkIfWishlist = (userId, productId) => async (dispatch) => {
    try {
        dispatch({
            type: CHECK_IF_WISHLIST_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/products/check-product-in-wishlist/${userId}/${productId}`, config)
        dispatch({
            type: CHECK_IF_WISHLIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CHECK_IF_WISHLIST_FAILED,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message
                : error.message
        })
    }
}
// DELETE FROM WISHLIST
export const deleteFromWishlist = (userId, productId) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_FROM_WISHLIST_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.post(`${API}/public/products/remove-from-wishlist/${userId}/${productId}`, config)
        dispatch({
            type: DELETE_FROM_WISHLIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_FROM_WISHLIST_FAILED,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message
                : error.message
        })
    }
}

// ADD PRODUCT TO CART
export const addToCart = (userId, productId) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_TO_CART_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.post(`${API}/public/products/add-to-cart/${userId}/${productId}`, config)
        dispatch({
            type: ADD_TO_CART_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADD_TO_CART_FAILED,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message
                : error.message
        })
    }
}

// GET CART
export const getCart = (userId) => async (dispatch) => {
    try {
        dispatch({
            type: GET_CART_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/products/cart-products/${userId}`, config)
        dispatch({
            type: GET_CART_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_CART_FAILED,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message
                : error.message
        })
    }
}

// Delete Product From Cart
export const deleteProductFromCart = (userId, productId) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_PRODUCT_FROM_CART_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.delete(`${API}/public/products/remove-from-cart/${userId}/${productId}`, config)
        dispatch({
            type: DELETE_PRODUCT_FROM_CART_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FROM_CART_FAILED,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message
                : error.message
        })
    }
}

//search product using keyword
export const searchProduct = (keyword) => async (dispatch) => {
    try {
        dispatch({
            type: SEARCH_PRODUCT_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/public/products/search?keyword=${keyword}`, config)
        dispatch({
            type: SEARCH_PRODUCT_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: SEARCH_PRODUCT_FAILED,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message
                : error.message
        })
    }
}

// add ratings
export const addRatings = (id, userName, rating, comment) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_RATING_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            userName, rating, comment
        }
        const { data } = await axios.post(`${API}/public/products/add-review/${id}`,body, config)
        dispatch({
            type: ADD_RATING_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADD_RATING_FAILED,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message
                : error.message
        })
    }
}