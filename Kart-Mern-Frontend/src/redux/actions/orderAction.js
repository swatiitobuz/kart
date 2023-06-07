import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILED,
    GET_ALL_ORDER_REQUEST,
    GET_ALL_ORDER_SUCCESS,
    GET_ALL_ORDER_FAILED,
    CANCEL_ORDER_REQUEST,
    CANCEL_ORDER_SUCCESS,
    CANCEL_ORDER_FAILED,
    SEARCH_PRODUCTS_IN_ORDER_REQUEST,
    SEARCH_PRODUCTS_IN_ORDER_SUCCESS,
    SEARCH_PRODUCTS_IN_ORDER_FAILED
} from '../constants/orderConstants'
import axios from 'axios'

const API = process.env.REACT_APP_NODE_API

// CREATE ORDER
export const createOrder = (userId, productId, quantity, amount, address) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_ORDER_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const body = {
            userId,
            productId,
            quantity,
            amount,
            address
        }
        const { data } = await axios.post(`${API}/private/orders/new`, body, config)
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAILED,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// GET ALL ORDER
export const getAllOrder = (userId) => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_ORDER_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/orders/all/${userId}`, config)
        dispatch({
            type: GET_ALL_ORDER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_ORDER_FAILED,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// CANCEL ORDER
export const cancelOrder = (id) => async (dispatch) => {
    try {
        dispatch({
            type: CANCEL_ORDER_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.delete(`${API}/private/orders/cancel/${id}`, config)
        dispatch({
            type: CANCEL_ORDER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CANCEL_ORDER_FAILED,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// SEARCH PRODUCTS IN ORDER OF A ASINGLE USER
export const searchProductsInOrder = (userId, q) => async (dispatch) => {
    try {
        console.log(q);
        dispatch({
            type: SEARCH_PRODUCTS_IN_ORDER_REQUEST
        })
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.get(`${API}/private/orders/${userId}/search?keyword=${q}`, config)
        dispatch({
            type: SEARCH_PRODUCTS_IN_ORDER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SEARCH_PRODUCTS_IN_ORDER_FAILED,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}
