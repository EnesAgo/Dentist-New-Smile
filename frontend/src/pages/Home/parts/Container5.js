import React from 'react'
import '../../../css/style.css'
import '../../../css/container5-style.css'

function Container5() {
      return (
        <div className="container container5" id="container5">

          <form action="https:localhost:3001/email" method="post">

            <input type="text" placeholder='name&surname' />

            <input type="email" placeholder='email' />

            <input type="text" placeholder='phone number' />

            <textarea placeholder='text' cols="30" rows="10"></textarea>

            <button type="submit">submit</button>

          </form>



          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.6964307603307!2d20.795080215215453!3d41.11932047928961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350dc9874d1e6ed%3A0x6d2f695bb76ad70e!2sKoshishta%2C%20Ohri!5e0!3m2!1str!2smk!4v1659181052756!5m2!1str!2smk" width="600" height="450" style={{border: "0"}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}

        </div>
      )
  }


export default Container5;