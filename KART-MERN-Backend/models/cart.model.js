import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
   product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
    }
   }
);

const cartModel = mongoose.model("cart", cartSchema);

export default cartModel;
        