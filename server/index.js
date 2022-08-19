const express = require('express');
const cors = require('cors');

const Appointment = require("./Mongoose")

//ini express server
const app = express();

//limit the api call
app.use(express.json({limit: '100mb'}));


//enable cors
app.use(cors({
    origin: "*",
    methods: ["GET","POST","DELETE"]
  }))



//queries
app.get("/", (req, res) => {
    res.json({"name": "api is created"})
})

//clear appointments
app.get("/clearAppointments", async (req, res) => {
  await Appointment.deleteMany({})

  res.json(["all appointments deleted"])
})

//new appointment
app.post("/newApointment", async (req, res) => {
    const apointment = await Appointment.create({
      "fullName": req.body.fullName,
      "phoneNumber": req.body.phoneNumber,
      "date": req.body.date,
      "time": req.body.time
    })

  apointment.save(function(err) {
    if (err) console.log(err);
  });
  
  res.json(apointment)
})


//get appointments
app.get("/apointment", async (req, res) => {
  res.json(await Appointment.find({}))
})





app.listen(3001);
