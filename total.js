const Record = require("./models/record")

function total() {
    Record.find()
            .lean()
            .then(records => console.log(records))
}

total()

module.exports = total