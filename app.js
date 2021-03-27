const express = require("express")
const app = express()
const port = 3000
const exphbs = require("express-handlebars")
require("./config/mongoose")

// setting
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(express.static("public"))


// router
app.get("/", (req,res) => {
    res.render("index")
})

// listen server
app.listen(port, () => {
    console.log("It's work!")
})