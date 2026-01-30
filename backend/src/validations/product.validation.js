const Joi = require("joi")

module.exports = Joi.object({
  name: Joi.string().required(),
  categoryId: Joi.string().required(),
  description: Joi.string().required(),
  imageUrls: Joi.array().items(Joi.string()).required()
})
