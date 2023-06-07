import mongoose from 'mongoose'

const paymentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'user'
    },
    paymentResult: {
      orderId:String,
      status: { type: String },
      receipt_email: { type: String },
      receipt_url: { type: String }
    }
  },
  {
    timestamps: true
  }
)

const PaymentModel = mongoose.model('Payment', paymentSchema)
export default PaymentModel
