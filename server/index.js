const express = require('express');
const cors = require('cors');

const MongooseFile = require("./Mongoose/Mongoose");

const Appointment = MongooseFile.Appointment;
const Logins = MongooseFile.Logins;

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
  let calAppointments = []
  const jsonAppointments = await Appointment.find({});



  jsonAppointments.forEach(e => {

    const splitDate = Array.from(e.date.split("-"))
    const splitTime = Array.from(e.time.split(":"))
    let fullDateTime = splitDate.concat(splitTime)
  
    fullDateTime[1] = fullDateTime[1]-1;
  
    const startDateTime = fullDateTime.map(e => parseInt(e))

    let endDateTime = fullDateTime.map(e => parseInt(e))

    if(endDateTime[4] == 30){
      endDateTime[4] = 00;
      endDateTime[3] = endDateTime[3]+1;
    }
    else{
      endDateTime[4] = 30;
    }
    
  
    console.log("\n")
    console.log(startDateTime)
    console.log(endDateTime)


    const obj = {
      title: `${e.fullName}`,
      start: new Date(startDateTime[0], startDateTime[1], startDateTime[2], startDateTime[3], startDateTime[4]),
      end: new Date(endDateTime[0], endDateTime[1], endDateTime[2], endDateTime[3], endDateTime[4])
    }

    calAppointments.push(obj)
  })

  res.json(calAppointments)
})




//login schema
app.post("/login", async (req, res) => {
  const data = req.body;
  const password = data.password;
  const username = data.username;
  let isTrue = false;

  console.log(username)
  console.log(password)

  const dbData = await Logins.find({})

  dbData.forEach(e => {
    if(username === e.username && password === e.password){
      isTrue = true
    }
  })
  
  if(isTrue){
    res.json({
      status: true
    })
  }else{
    res.json({
      status: false
    })
  }
})



app.listen(3001);
