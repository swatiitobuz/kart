import express from 'express'

import {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    resetPassword,
    addAddress
} from '../../controllers/user.controller.js'

const router = express.Router()


router.post('/register', registerUser)
router.post('/login', loginUser)

router.get('/profile/:id', getUserProfile)
router.put('/update/:id', updateUserProfile)

router.put('/reset-password/:id', resetPassword)

router.post('/add-address/:id', addAddress)

export default router