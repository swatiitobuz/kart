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


const getAllProductState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    products: null
}
export const getAllProductsReducer = (state = getAllProductState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case GET_ALL_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const getSingleProductState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    product: null
}
export const getSingleProductReducer = (state = getSingleProductState, action) => {
    switch (action.type) {
        case GET_SINGLE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        case GET_SINGLE_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const addToWishlistState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    data: null
}
export const addToWishlistReducer = (state = addToWishlistState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_TO_WISHLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case ADD_TO_WISHLIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const getWishlistState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    wishlistProduct: null
}
export const getWishlistReducer = (state = getWishlistState, action) => {
    switch (action.type) {
        case GET_WISHLIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_WISHLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                wishlistProduct: action.payload
            }
        case GET_WISHLIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const checkIfWishlistState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    isWishlist: null
}
export const checkIfWishlistReducer = (state = checkIfWishlistState, action) => {
    switch (action.type) {
        case CHECK_IF_WISHLIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CHECK_IF_WISHLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                isWishlist: action.payload
            }
        case CHECK_IF_WISHLIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const deleteFromWishlistState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    data: null
}
export const deleteFromWishlistReducer = (state = deleteFromWishlistState, action) => {
    switch (action.type) {
        case DELETE_FROM_WISHLIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_FROM_WISHLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case DELETE_FROM_WISHLIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const addToCartState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    data: null
}
export const addToCartReducer = (state = addToCartState, action) => {
    switch (action.type) {
        case ADD_TO_CART_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case ADD_TO_CART_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const getCartState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    cartProduct: null
}

export const getCartReducer = (state = getCartState, action) => {
    switch (action.type) {
        case GET_CART_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cartProduct: action.payload
            }
        case GET_CART_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const deleteCartProductState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    data: null
}

export const deleteCartProductReducer = (state = deleteCartProductState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT_FROM_CART_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_PRODUCT_FROM_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case DELETE_PRODUCT_FROM_CART_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const searchProductState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    data: null
}

export const searchProductReducer = (state = searchProductState, action) => {
    switch (action.type) {
        case SEARCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SEARCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case SEARCH_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const addRatingState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    data: null
}

export const addRatingsReducer = (state = addRatingState, action) => {
    switch (action.type) {
        case ADD_RATING_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_RATING_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case ADD_RATING_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}