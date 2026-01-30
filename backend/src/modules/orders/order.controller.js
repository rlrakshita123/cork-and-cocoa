const Order = require("../../database/models/Order")

module.exports = {
  createOrder: async (req, res) => {
    const order = await Order.create(req.body)
    res.json({ success: true, data: order })
  }
}
