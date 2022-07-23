import React from 'react'
import '../../../css/style.css'

function Container3() {
      return (
        <div className="container container3" id="container3">
            
            <h1>Our Doctors</h1>
        
            <ul id="doctors">
                <li>
                    <img src="photos/doctor1.PNG" alt="doctor" id="imageOne" />
                    <div>
                        <h3>name</h3>
                        <p>category</p>
                    </div>
                </li>
                <li>
                    <img src="photos/doctor2.PNG" alt="doctor" id="imageTwo" />
                    <div>
                        <h3>name</h3>
                        <p>category</p>
                    </div>
                </li>
                <li>
                    <img src="photos/doctor3.PNG" alt="doctor" id="imageThree" />
                    <div>
                        <h3>name</h3>
                        <p>category</p>
                    </div>
                </li>
            </ul>
            
            <div className="buttons">
                <button id="imgLeft">
                    <i className="fas fa-arrow-right fa-rotate-180"></i>
                </button>
                <button id="imgRight">
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        
        </div>
      )
  }


export default Container3;