
import Razorpay from "razorpay";
import shortId from "shortid";
import PaymentModel from "../models/payment.model.js";
import userModel from '../models/user.model.js'

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/**
 * @description start a razorpay payment
 * @route POST /private/payment/razorpay/init
 * @access private
 */
export const initPayment = async (req, res) => {
  const { userId,amount,productId } = req.body;

  try {
    const checkUser = await userModel.findOne({ _id: userId });

    if (checkUser) {
      const options = {
        amount: amount * 100,
        receipt: shortId.generate(),
      };
      const response = await razorpay.orders.create(options);
    
      res.status(200).json({
        success: true,
        message: "Payment initiated",
        orderId: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @description finalize a razorpay payment
 * @route POST /private/payment/razorpay/success
 * @access private
 */
export const paymentSuccess = async (req, res) => {
  const { orderId, userId } = req.body;

  try {
    console.log(orderId, userId );
    const checkUser = await userModel.findOne({ _id: userId });

    if (checkUser) {
      // Get an order with id
      const orderDetails = await razorpay.orders.fetch(orderId);

      console.log("====================================");
      console.log(orderDetails);
      console.log("====================================");

      // create paymnet model
      const createPayment = await PaymentModel.create({
        user: userId,
        paymentResult: {
          orderId: orderId,
          status: orderDetails.status,
          receipt_email: checkUser.email
        },
      });
      console.log(createPayment,"createPayment");
      if (createPayment) {
        res.status(200).json({
          success: true,
          message: "Payment success",
          data: createPayment,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Payment not completed",
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
