const razorpay = require("../../config/razorpay")
const Payment = require("../../database/models/Payment")

module.exports = {
  createOrder: async (req, res) => {
    const order = await razorpay.orders.create(req.body)
    const payment = await Payment.create({
      razorpayOrderId: order.id,
      status: "pending"
    })
    res.json({ success: true, data: payment })
  }
}
