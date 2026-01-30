const Product = require("../../database/models/Product")
const Order = require("../../database/models/Order")

module.exports = {
  getOrders: async (req, res) => {
    const orders = await Order.find()
    res.json({ success: true, data: orders })
  },

  addProduct: async (req, res) => {
    const product = await Product.create(req.body)
    res.json({ success: true, data: product })
  }
}
