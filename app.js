const express = require("express")
const app = express()
const port = 3000
const exphbs = require("express-handlebars")
const routes = require("./routes")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
require("./config/mongoose")

// setting
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)
app.use(methodOverride("_method"))

// listen server
app.listen(port, () => {
    console.log("It's work!")
})