const express = require("express")
const router = express.Router()
const controller = require("./admin.controller")
const adminMiddleware = require("../../middlewares/admin.middleware")

router.get("/orders", adminMiddleware, controller.getOrders)
router.post("/products", adminMiddleware, controller.addProduct)

module.exports = router
