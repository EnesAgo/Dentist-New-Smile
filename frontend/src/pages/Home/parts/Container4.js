import React from 'react'
import '../../../css/style.css'

function Container4() {
      return (
        <div className="container container4" id="container4">

            <h1>Latest Posts</h1>
            
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
      )
  }


export default Container4;