import React, { useRef } from 'react'
import './../../../css/contact.css'

function Register() {
    const nameRef = useRef()
    const phoneRef = useRef()
    const dateRef = useRef()
    const timeRef = useRef()

    function getRef() {
        dateRef.current.type = "date"
    }

    async function submitForm(e) {
      e.preventDefault();

      const obj = {
        "fullName": nameRef.current.value,
        "phoneNumber": phoneRef.current.value,
        "date": dateRef.current.value,
        "time": timeRef.current.value
      }

      const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    };

    const response = await fetch("http://localhost:3001/newApointment", settings)
    const responseData = await response.json()

    console.log(responseData)




    nameRef.current.value = ''
    phoneRef.current.value = ''
    dateRef.current.value = ''
    timeRef.current.value = ''

      
    }

      return (
          <div className='ContactMain register'>

            <form onSubmit={submitForm}>
                <input required type="text" ref={nameRef} placeholder='name&surname' />

                <input required type="text" ref={phoneRef} placeholder='phone number' />

                 <input required ref={dateRef} type="text" placeholder="MM/DD/YYYY"
                    onFocus={getRef} />

                 <input required type="text" placeholder='chooose the time' ref={timeRef} list="time" />

                 <datalist name="time" id="time">
                    <option value="14:00">14:00</option>
                    <option value="14:30">14:30</option>
                    <option value="15:00">15:00</option>
                    <option value="15:30">15:30</option>
                 </datalist>


                <button type="submit">submit</button>
            </form>

            <div>
                <h1>Make Appointment</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                  Distinctio quibusdam earum, cum, velit perspiciatis tenetur nobis quidem,  <br />
                  neque dolorem eius itaque exercitationem voluptate <br />
                  deserunt? Libero assumenda cumque placeat dolore sint?
                </p>
            </div>

          </div>
      )
  }


export default Register;