const express = require("express")
const router = express.Router()

router.get("/", (req,res) => {
    res.render("index")
})

router.get("/expense_tracker/new_income", (req,res) => {
    res.render("income")
})

module.exports = router


