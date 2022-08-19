const mongoose = require("mongoose")
require('dotenv').config()


//connecting to database
mongoose.connect(process.env.TOKEN, () => {
  console.log("connected");
},
e => {
console.log(e)
})


//making schema
const appointmentSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  date: String,
  time: String
})

//exporting schema
module.exports = mongoose.model("Appointment", appointmentSchema);