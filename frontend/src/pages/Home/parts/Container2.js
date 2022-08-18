import React from 'react'
import {Link} from 'react-router-dom'
import '../../../css/style.css'

function Container2() {
      return (
        <div className="container container2" id="container2">
            <div className="threeBoxes">
                <div className="box">
                    <img src="https://ykcstruga9aclasses.000webhostapp.com/user.PNG" alt="circle" />
                    <h3>Chat with a <br /> doctor</h3>
                </div>
                <div className="box">
                    <img src="https://ykcstruga9aclasses.000webhostapp.com/user.PNG" alt="circle" />
                    <h3>One-Health <br /> Protection</h3>
                </div>
                <div className="box">
                    <img src="https://ykcstruga9aclasses.000webhostapp.com/user.PNG" alt="circle" />
                    <h3>One-Health <br /> Pharmacy</h3>
                </div>
            </div>
            <ul>
                <li>
                    <h1>Welcome to Your health Center</h1>
                    <p className="lorem"> 
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Et enim minima, doloremque, quod cum libero quasi debitis
                        quo necessitatibus tempora, distinctio facilis possimus dolores 
                        sapiente non totam corporis illo nostrum?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Quod, odio animi? At assumenda est natus amet impedit aliquam
                        beatae accusantium ipsam repellat laboriosam. Blanditiis, 
                        fugiat eum? Sint consequatur temporibus repudiandae?
                    </p>
                    <Link to="/about">
                    <div className="mediumGreenButton">
                        <p>let's consult</p>
                    </div>
                    </Link>
                </li>
                <li>
                    <img src="photos/doctor.png" alt="doctor" />
                </li>
            </ul>
    </div>
      )
  }


export default Container2;