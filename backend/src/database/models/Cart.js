const mongoose = require("mongoose")

const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  variantId: String,
  quantity: Number,
  price: Number
})

const cartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    items: [cartItemSchema]
  },
  { timestamps: true }
)

module.exports = mongoose.model("Cart", cartSchema)
