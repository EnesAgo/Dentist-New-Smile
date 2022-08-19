const mongoose = require("mongoose")
require('dotenv').config()


//connecting to database
mongoose.connect(`${process.env.TOKEN}/newSmile?retryWrites=true&w=majority`, () => {
  console.log("connected");
},
e => {
console.log(e)
})


//making schema for appointments
const appointmentSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  date: String,
  time: String
})


//making schema for Logins
const loginsSchema = new mongoose.Schema({
  username: String,
  password: String
})


//exporting schema
module.exports = {
  Appointment: mongoose.model("Appointment", appointmentSchema),
  Logins: mongoose.model("Logins", loginsSchema)
  
}