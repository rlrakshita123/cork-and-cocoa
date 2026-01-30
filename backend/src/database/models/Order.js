const mongoose = require("mongoose")

const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  variantId: String,
  name: String,
  price: Number,
  quantity: Number
})

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [orderItemSchema],
    address: Object,
    totalAmount: Number,
    paymentStatus: String,
    orderStatus: String
  },
  { timestamps: true }
)

module.exports = mongoose.model("Order", orderSchema)
