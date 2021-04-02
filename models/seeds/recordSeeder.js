const db = require("../../config/mongoose")
const Record = require("../record")
const recordJSON = require("./record.json").records

db.once("open", () => {
  console.log("mongodb connected!")
  for (let i = 0; i < recordJSON.length; i++) {
    Record.create({
      name: recordJSON[i].name,
      income: recordJSON[i].income,
      category: recordJSON[i].category,
      categoryIcon: recordJSON[i].categoryIcon,
      date: recordJSON[i].date,
      amount: recordJSON[i].amount,
    })
  }
  console.log("done")
}).then(() => {
  return db.close()
})