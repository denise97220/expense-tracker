const express = require("express")
const router = express.Router()
const Record = require("../../models/record")

router.post("/filterByCategory", (req,res) => {
    const keyword = req.body.category
    let total = 0
    Record.find({category: { $regex: `${keyword}`, $options: "i" }})
            .lean()
            .then(records => {
                records.map(record => total += record.amount)
                res.render("index", { records: records, total: total })
            })
            .catch(error => console.log(error))
})

module.exports = router