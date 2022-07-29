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

        </div>
      )
  }


export default Container5;