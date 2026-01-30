const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema(
  {
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    razorpayOrderId: String,
    razorpayPaymentId: String,
    status: String
  },
  { timestamps: true }
)

module.exports = mongoose.model("Payment", paymentSchema)
