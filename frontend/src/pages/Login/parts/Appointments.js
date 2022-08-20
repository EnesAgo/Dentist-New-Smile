import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)


function Appointments() {

    const [myEventsList, setMyEventsList] = useState([]);


    useEffect(() => {
        async function getEvents() {
            const response = await fetch("http://localhost:3001/apointment")
            const data = await response.json()

            const realData = data.map(e => {
                return ({
                    title: e.title,
                    start: new Date(e.start),
                    end: new Date(e.end)
                })
            })

            console.log(realData)

            setMyEventsList(realData)
        }
        getEvents()
    }, [])



      return (
          <div>
            <Calendar
              localizer={localizer}
              events={myEventsList}
              startAccessor="start"
              endAccessor="end"
              style={{ height: "600px" }}
            />
          </div>
      )
  }


export default Appointments;