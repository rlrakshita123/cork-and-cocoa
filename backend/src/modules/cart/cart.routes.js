const express = require("express")
const router = express.Router()
const controller = require("./cart.controller")

router.get("/", controller.getCart)

module.exports = router
