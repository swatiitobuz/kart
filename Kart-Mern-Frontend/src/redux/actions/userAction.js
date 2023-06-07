import axios from 'axios'
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
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED

} from '../constants/userConstants'




const localStorage = window.localStorage
const API = process.env.REACT_APP_NODE_API



// signIn user
export const signInUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNIN_REQUEST
    })

    const config = {
      'Content-Type': 'application/json'
    }
    const body = {
      email,
      password
    }
    const { data } = await axios.post(`${API}/public/auth/login`, body, config)
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data
    })
    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
export const signUpUser = (email, password, mobile) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNUP_REQUEST
    })

    const config = {
      'Content-Type': 'application/json'
    }
    const body = {
      email,
      password,
      mobile
    }
    const { data } = await axios.post(`${API}/public/auth/register`, body, config)
    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: data
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

//get single user
export const getSingleUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SINGLE_USER_REQUEST
    })
    const config = {
      'Content-Type': 'application/json'
    }
    const { data } = await axios.get(`${API}/public/auth/profile/${id}`, config)
    dispatch({
      type: GET_SINGLE_USER_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: GET_SINGLE_USER_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}


// user logout
export const logoutUser = () => (dispatch) => {
  if (localStorage.getItem('userInfo')) {
    localStorage.removeItem('userInfo')
  }
  dispatch({
    type: USER_LOGOUT
  })
}

// update user
export const updateUser = (
  avatar,
  name,
  email,
  // password,
  mobile,
  address,
  pincode,
  city,
  state,
  // Landmark,
  // altMobile,
  // AddressType,
  id) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_USER_REQUEST
      })
      const config = {
        'Content-Type': 'application/json'
      }
      const body = {
        avatar: avatar,
        name: name,
        email: email,
        // password: password,
        mobile: mobile,
        address: address,
        pincode: pincode,
        city: city,
        state: state,
        // Landmark: Landmark,
        // altMobile: altMobile,
        // AddressType: AddressType
      }
      const { data } = await axios.put(`${API}/public/auth/update/${id}`, body, config)
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }

// reset password
export const resetPassword = (id,password) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_PASSWORD_REQUEST
    })
    const config = {
      'Content-Type': 'application/json'
    }
    const body = {
      password: password,
    }
    const { data } = await axios.put(`${API}/public/auth/reset-password/${id}`, body, config)
    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}