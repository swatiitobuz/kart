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

const createOrderState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    order: null
}
export const createOrderReducer = (state = createOrderState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload
            }
        case CREATE_ORDER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const getAllOrderState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    orders: null
}
export const getAllOrderReducer = (state = getAllOrderState, action) => {
    switch (action.type) {
        case GET_ALL_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload
            }
        case GET_ALL_ORDER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const cancelOrderState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    data: null
}
export const cancelOrderReducer = (state = cancelOrderState, action) => {
    switch (action.type) {
        case CANCEL_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CANCEL_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case CANCEL_ORDER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const searchProductsInOrderState = {
    loading: false,
    error: null,
    isAuthenticated: false, 
    products: null
}
export const searchProductsInOrderReducer = (state = searchProductsInOrderState, action) => {
    switch (action.type) {
        case SEARCH_PRODUCTS_IN_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SEARCH_PRODUCTS_IN_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case SEARCH_PRODUCTS_IN_ORDER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}