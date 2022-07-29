import React, { useState } from 'react'
import '../../../css/style.css'
import Container3_box from './Container3_box';

function Container3() {

      const arr = ["photos/doctor1.PNG", "photos/doctor2.PNG", "photos/doctor3.PNG", "photos/doctor.png"]

      const [threeUrls, setThreeUrls] = useState([arr[0], arr[1], arr[2]])

      const [index, setIndex] = useState(0);

      function goLeft() {
        console.log("left")
      }

      function goRight() {
        if(threeUrls[0] == arr[0]){
            setThreeUrls([arr[arr.length-1], arr[0], arr[1]])
            setIndex(arr.length-1)
        }
        else if(threeUrls[1] == arr[0]){
            setThreeUrls([arr[arr.length-2], arr[arr.length-1], arr[0]])
            setIndex(arr.length-2)
        }
        else{
            setIndex(prev => prev-1)
            setThreeUrls([arr[index], arr[index-1], arr[index-2]])
        }
        console.log(index)
      }

      return (
        <div className="container container3" id="container3">
            
            <h1>Our Doctors</h1>
        
            <ul id="doctors">

                {threeUrls.map(e => (
                    
                    <Container3_box
                    key={`${Math.random()}`}
                    name={`name`} 
                    category={`categoty`} 
                    imgUrl={`${e}`} 
                    imgAlt={`doctor`}
                    />

                ))}


            </ul>
            
            <div className="buttons">
                <button onClick={goLeft} id="imgLeft">
                    <i className="fas fa-arrow-right fa-rotate-180"></i>
                </button>
                <button onClick={goRight} id="imgRight">
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        
        </div>
      )
  }


export default Container3;