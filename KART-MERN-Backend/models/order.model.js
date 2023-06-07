import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
    },
    razorpayOrderId: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "delivered", "cancelled"]
    }
},
    {
        timestamps: true,
    }
);

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;
