import React, { useRef } from 'react'
import './../../../css/contact.css'

function Register() {
    const dateRef = useRef()

    function getRef() {
        dateRef.current.type = "date"
    }

      return (
          <div className='ContactMain register'>

            <form action="https:localhost:3001/email" method="post">
                <input type="text" placeholder='name&surname' />

                <input type="text" placeholder='phone number' />

                {/* <input type="time" min="14:00" max="17:00" placeholder='time' />
                 */}

                 {/* <input type="sel" /> */}

                 {/* <input type="date" placeholder='choose a date' /> */}

                 <input ref={dateRef} type="text" placeholder="MM/DD/YYYY"
                    onFocus={getRef} />

                 <input type="text" placeholder='chooose the time' list="time" />

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