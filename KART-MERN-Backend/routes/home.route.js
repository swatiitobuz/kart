import express from 'express'

const router = express.Router()

const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })

router.get('/', (req, res) => {
    return res.json({
        message: 'Kart Backend Server running...',
        deployTime: time,
        env: process.env.NODE_ENV
    })
})

export default router
