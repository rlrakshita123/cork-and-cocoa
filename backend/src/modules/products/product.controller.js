const Product = require("../../database/models/Product")

module.exports = {
  getAll: async (req, res) => {
    const products = await Product.find({ isActive: true })
    res.json({ success: true, data: products })
  }
}
