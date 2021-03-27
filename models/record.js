const mongoose = require("mongoose")
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String, 
    required: true 
  },
  income: {
    type: Boolean,
    default: false
  },
  category: {
    type: String, 
    required: true
  },
  date: {
    type: String, 
    required: true
  },
  amount: {
    type: Number, 
    required: true
  }

})

module.exports = mongoose.model("Record", todoSchema)


