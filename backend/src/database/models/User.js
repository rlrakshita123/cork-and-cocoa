const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
  line1: String,
  city: String,
  state: String,
  pincode: String
})

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    role: { type: String, default: "user" },
    addresses: [addressSchema]
  },
  { timestamps: true }
)

module.exports = mongoose.model("User", userSchema)
