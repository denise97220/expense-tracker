const express = require("express")
const router = express.Router()
const Record = require("../../models/record")

router.get("/", (req,res) => {
    let total = 0
    Record.find()
        .lean()
        .then(records => {
            records.map(record => {
                if(record.category !== "收入") {
                    total -= record.amount
                } else {
                    total += record.amount
                }
            })
            res.render("index", { records: records, total: total })
        })
        .catch(error => console.log(error))
})

module.exports = router


