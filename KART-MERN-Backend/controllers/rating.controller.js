import productModel from '../models/product.model.js'
import env from 'dotenv'

env.config()

// add review
export const addReview = async (req, res) => {
    try {
        const { id } = req.params
        const { userName, rating, comment } = req.body

        const product = await productModel.findById(id)

        if (product) {

            const review = {
                userName,
                rating: Number(rating),
                comment
            }

            product.reviews.push(review)

            //   create all 5 star
            if (product.numRatings.length === 0) {
                for (let i = 1; i <= 5; i++) {
                    product.numRatings.push({ star: i, count: 0 })
                }
            }

            product.numRatings.forEach(item => {
                if (item.star === Number(rating)) {
                    item.count += 1
                }
            })

            product.totalReviews += 1

            product.rating = product.numRatings.reduce((acc, item) => item.star * item.count + acc, 0) / product.totalReviews

            await product.save()

            res.status(200).json({
                success: true,
                message:"Review added"
            })
        } else {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
