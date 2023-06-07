import userModel from '../models/user.model.js'
import { generateToken } from '../utils/generateToken.js'
// import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import env from 'dotenv'
// import isEmpty from '../utils/isEmpty.js'

env.config()

// @route: POST /public/auth/register
// @desc: Register user
// @access: Public
export const registerUser = async (req, res) => {
    try {
        const {
            email,
            password,
            mobile
        } = req.body

        const checkEmail = await userModel.findOne({
            email
        })
        if (!checkEmail) {
            console.log(email);
            const hashedPassword = await bcrypt.hash(password, 12);
            console.log(hashedPassword);
            const createUserAccount = await userModel.create({
                email,
                password: hashedPassword,
                mobile
            })
            console.log(createUserAccount);
            if (createUserAccount) {
                console.log(createUserAccount);
                res.json({
                    success: true,
                    _id: createUserAccount._id,
                    email: createUserAccount.email,
                    mobile: createUserAccount.mobile
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    message: 'Invalid user data'
                })
            }
        }
        else {
            res.status(400).json({
                success: false,
                message: 'User already exists'
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

// @route: POST /public/auth/login
// @desc: Login user
// @access: Public
export const loginUser = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body

        const checkEmail = await userModel.findOne({
            email
        })

        if (checkEmail) {
            const isMatch = await bcrypt.compare(password, checkEmail.password)
            if (isMatch) {
                res.json({
                    success: true,
                    _id: checkEmail._id,
                    email: checkEmail.email,
                    mobile: checkEmail.mobile,
                    token: generateToken(checkEmail._id)
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    message: 'Wrong password'
                })
            }
        }
        else {
            res.status(404).json({
                success: false,
                message: 'User not found'
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

// @route: GET /public/auth/profile/:id
// @desc: Get user profile
// @access: Private
export const getUserProfile = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id);
        const user = await userModel.findById(id)
        if (user) {
            res.json(
                {
                    success: true,
                    user
                }
            )
        }
        else {
            res.status(404).json({
                success: false,
                message: 'User not found'
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

// @route: POST /public/auth/update/:id
// @desc: Update user profile
// @access: Private
export const updateUserProfile = async (req, res) => {
    try {
        const id = req.params.id
        const {
            name,
            email,
            mobile,
            address,
            pincode,
            city,
            state,
            Landmark,
            altMobile,
            AddressType
        } = req.body

        const user = await userModel.findById(id)
        if (user) {
            user.name = name || user.name
            user.email = email || user.email
            user.mobile = mobile || user.mobile
            user.address = address || user.address
            user.pincode = pincode || user.pincode
            user.city = city || user.city
            user.state = state || user.state
            user.Landmark = Landmark || user.Landmark
            user.altMobile = altMobile || user.altMobile
            user.AddressType = AddressType || user.AddressType

            const updatedUser = await user.save()
            res.json({
                success: true,
                user: updatedUser
            })
        }
        else {
            res.status(404).json({
                success: false,
                message: 'User not found'
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

// @route: POST /public/auth/reset-password/:id
// @desc: Reset user password
// @access: Private
export const resetPassword = async (req, res) => {
    try {
        const { password } = req.body
        const id = req.params.id

        const user = await userModel.findById(id)
        if (user) {
            const hashedPassword = await bcrypt.hash(password, 12);
            user.password = hashedPassword
            const updatedUser = await user.save()
            res.json({
                success: true,
                user: updatedUser
            })
        }
        else {
            res.status(404).json({
                success: false,
                message: 'User not found'
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

// add address
export const addAddress = async (req, res) => {
    try {
        const { name,
            address,
            city,
            state,
            pincode,
            altMobile,
            landmark,
            AddressType } = req.body

        const id = req.params.id
        const user = await userModel.findById(id)
        if (!user) {
            res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }
        else {

            const updated = await userModel.findByIdAndUpdate({
                _id: id
            }, {
                name: name,
                address: address,
                city: city,
                state: state,
                pincode: pincode,
                altMobile: altMobile,
                landmark: landmark,
                AddressType: AddressType
            })

            res.status(200).json({
                success: true,
                message: 'Address added successfully'
            })
        }

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}