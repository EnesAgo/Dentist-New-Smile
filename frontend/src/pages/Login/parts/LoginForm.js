import React, { useState } from 'react'
import './../../../css/login.css'

function LoginForm({ buttonEvent, getPassword, getUsername }) {
      return (
          <div className='LoginFormDiv'>
              <form onSubmit={(e) => e.preventDefault()}>
                <input onChange={getUsername} className='loginInput' type="text" placeholder='username' required /> <br />
                <input onChange={getPassword} className='loginInput' type="password" placeholder='password' required /> <br />
                <button className='submitButton' onClick={ buttonEvent }>submit</button>
              </form>
          </div>
      )
  }


export default LoginForm;