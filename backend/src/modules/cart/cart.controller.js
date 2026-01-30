const Cart = require("../../database/models/Cart")

module.exports = {
  getCart: async (req, res) => {
    const cart = await Cart.findOne({ userId: req.user?.id || null })
    res.json({ success: true, data: cart })
  }
}
