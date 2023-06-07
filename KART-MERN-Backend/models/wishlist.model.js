import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
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

const wishlistModel = mongoose.model("wishlist", wishlistSchema);

export default wishlistModel;