const User = require("../../database/models/User")

module.exports = {
  getProfile: async (req, res) => {
    const user = await User.findById(req.user.id)
    res.json({ success: true, data: user })
  }
}
