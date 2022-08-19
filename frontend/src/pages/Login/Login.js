import React, { useState } from 'react'
import Appointments from './parts/Appointments';
import LoginForm from './parts/LoginForm';
import './../../css/login.css'

function Login() {

    const [isLogged, setIsLogged] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    function getUsername(e) {
        setUsername(e.target.value)
    }
    function getPassword(e) {
        setPassword(e.target.value)
    }

    async function buttonEvent() {
        if(username && password){
            console.log("pressed")

            const obj = {
                "username": username,
                "password": password
            }

            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            };

            try{
                const response = await fetch("http://localhost:3001/login",settings);
                const data = await response.json()

                if(data.status === true){
                    setIsLogged(true)
                }
                else{
                    alert("username or password is wrong")
                }
            }
            catch(e){
                console.log(e)
            }
        }
    }



      return (
          <div className='LoginMain'>
              {
                isLogged ?
                <Appointments /> :
                <LoginForm  buttonEvent={buttonEvent} getPassword={getPassword} getUsername={getUsername} />
              }
          </div>
      )
  }


export default Login;