const db = require("../../config/mongoose")
const Category = require("../category")
const categoryJSON = require("./category.json").categories

db.once("open", () => {
  console.log("mongodb connected!")
  for (let i = 0; i < categoryJSON.length; i++) {
    Category.create({
      category: categoryJSON[i].category,
      categoryIcon: categoryJSON[i].categoryIcon
    })
  }
  console.log("done")
})