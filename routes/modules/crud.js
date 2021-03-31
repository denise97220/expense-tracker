const express = require("express")
const router = express.Router()
const Record = require("../../models/record")
const Category = require("../../models/category")

router.get("/new", (req,res) => {
    res.render("new")
})

router.post("/new", (req,res) => {
    const {name, date, category, amount} = req.body
    Category.find({category: { $regex: `${req.body.category}`, $options: "i" }})
            .lean()
            .then(record => {
                let categoryIcon = record[0].categoryIcon
                Record.create({
                    name: name,
                    date: date,
                    category: category,
                    categoryIcon: categoryIcon,
                    amount: amount
                })
            })
            .then(res.redirect("/"))
            .catch(error => console.log(error))
})


router.get("/:id/edit", (req,res) => {
    const id = req.params.id
    Record.findById(id)
            .lean()
            .then(record => res.render("edit", {record: record}))
})

router.put("/:id", (req,res) => {
    const id = req.params.id
    const editedRecord = req.body
    return Record.findById(id)
                    .then(record => {
                        record.name = editedRecord.name
                        record.date = editedRecord.date
                        record.category = editedRecord.category
                        record.amount = editedRecord.amount
                        return record.save()
                    })
                    .then(() => res.redirect("/"))
                    .catch(error => console.log(error))
})

router.delete("/:id", (req,res) => {
    const id = req.params.id
    Record.findById(id)
            .then(record => {
                return record.remove()
            })
            .then(() => res.redirect("/"))
            .catch(error => console.log(error))
})

module.exports = router