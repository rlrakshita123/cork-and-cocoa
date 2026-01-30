const Joi = require("joi")

module.exports = Joi.object({
  items: Joi.array().items(
    Joi.object({
      productId: Joi.string().required(),
      variantId: Joi.string().required(),
      quantity: Joi.number().min(1).required()
    })
  ).required(),
  address: Joi.object().required()
})

