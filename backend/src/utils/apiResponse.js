module.exports = (res, status, success, data, message) => {
  return res.status(status).json({
    success,
    data,
    message
  })
}
