import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
    },
    mobile: {
        type: String
    },
    altMobile: {
        type: String
    },
    address: {
        type: String
    },
    pincode: {
        type: Number
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    landmark: {
        type: String
    },
    AddressType: {
        type: String,
        default: 'home'
    }

},
    { timestamps: true }
)

const userModel = mongoose.model('user', userSchema)

export default userModel