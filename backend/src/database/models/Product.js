const mongoose = require("mongoose")

const variantSchema = new mongoose.Schema({
  sizeOrWeight: String,
  alcoholOption: String,
  price: Number,
  stock: Number
})

const productSchema = new mongoose.Schema(
  {
    name: String,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    description: String,
    imageUrls: [String],
    variants: [variantSchema],
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Product", productSchema)
