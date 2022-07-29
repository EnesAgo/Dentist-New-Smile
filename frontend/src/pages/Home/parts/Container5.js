import React from 'react'
import '../../../css/style.css'
import '../../../css/container5-style.css'

function Container5() {
      return (
        <div className="container container5" id="container5">

          <form action="https:localhost:3001/email" method="post">

            <input type="text" placeHolder='name&surname' />

            <input type="email" placeHolder='email' />

            <input type="text" placeHolder='phone number' />

            <textarea placeHolder='text' cols="30" rows="10"></textarea>

            <button type="submit">submit</button>

          </form>

        </div>
      )
  }


export default Container5;