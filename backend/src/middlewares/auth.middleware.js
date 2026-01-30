module.exports = (req, res, next) => {
  req.user = null
  next()
}
