const express = require("express")
const router = express.Router()
const home = require("./modules/home")
const crud = require("./modules/crud")

router.use("/", home)
router.use("/expense-tracker", crud)

module.exports = router