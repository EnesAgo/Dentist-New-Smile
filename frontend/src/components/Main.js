import React from 'react'

function Main() {
      return (
          <div>
                  <div className="main">
        <div className="container container1" id="container1">
            <h4>LET'S MAKE YOUR TEETH HAPPIER</h4>
            <h2>NEW SMILE</h2>

            <div className="consultBut">
                <p>let's consult</p>
            </div>

        </div>

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
                    <div className="mediumGreenButton">
                        <p>let's consult</p>
                    </div>
                </li>
                <li>
                    <img src="photos/doctor.png" alt="doctor" />
                </li>
            </ul>
        </div>

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

        <div className="container container4" id="container4">

            <h1>Latest News</h1>
            
            <ul id="news">
                <li>
                    <img src="photos/news1.PNG" alt="news" id="imageOne" />
                    <div>
                        <h3>List of Countries without <br /> Coronavirus case</h3>
                        <p><span>from uknown</span> <span>1 week ago</span></p>
                    </div>
                </li>
                <li>
                    <img src="photos/news1.PNG" alt="doctor" id="imageTwo" />
                    <div>
                        <h3>List of Countries without <br /> Coronavirus case</h3>
                        <p><span>from uknown</span> <span>1 week ago</span></p>
                    </div>
                </li>
                <li>
                    <img src="photos/news1.PNG" alt="doctor" id="imageThree" />
                    <div>
                        <h3>List of Countries without <br /> Coronavirus case</h3>
                        <p><span>from uknown</span> <span>1 week ago</span></p>
                    </div>
                </li>
            </ul>

            <button className="mediumGreenButton readMore">Read More</button>

        </div>

    </div>
          </div>
      )
  }


export default Main;