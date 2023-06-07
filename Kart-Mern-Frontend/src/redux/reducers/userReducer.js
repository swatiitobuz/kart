import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_LOGOUT,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED
} from '../constants/userConstants'


export const userSignupReducer = (
  state = {
    loading: false,
    userInfo: null,
    error: null,
    isAuthenticated: false
  },
  action
) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return {
        ...state,
        userInfo: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        userInfo: action.payload

      }
    case USER_SIGNUP_FAILED:
      return {
        ...state,
        loading: false,
        userInfo: null,
        isAuthenticated: false,
        error: action.payload
      }
    default:
      return state
  }
}



///    SIGNIN REDUCER    ///
export const userSigninReducer = (
  state = {
    loading: false,
    userInfo: null,
    error: null,
    isAuthenticated: false
  },
  action
) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {
        ...state,
        userInfo: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case USER_SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        userInfo: action.payload

      }
    case USER_SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        userInfo: null,
        isAuthenticated: false,
        error: action.payload
      }

    case USER_LOGOUT:
      return {
        userInfo: null
      }
    default:
      return state
  }
}

///get single user
export const getSingleUserReducer = (
  state = {
    loading: false,
    user: null,
    error: null,
    isAuthenticated: false
  },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_USER_REQUEST:
      return {
        ...state,
        user: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        user: action.payload

      }
    case GET_SINGLE_USER_FAILED:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false,
        error: action.payload
      }

    default:
      return state
  }
}

///reset password
export const resetPasswordReducer = (
  state = {
    loading: false,
    user: null,
    error: null,
    isAuthenticated: false
  },
  action
) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        user: null,
        error: null,
        isAuthenticated: false,
        loading: true
      }
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        user: action.payload

      }
    case RESET_PASSWORD_FAILED:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false,
        error: action.payload
      }

    default:
      return state
  }
}
