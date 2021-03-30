const express = require("express")
const router = express.Router()
const home = require("./modules/home")
const crud = require("./modules/crud")
const filter = require("./modules/filter")

router.use("/", home)
router.use("/expense-tracker", crud, filter)

module.exports = router