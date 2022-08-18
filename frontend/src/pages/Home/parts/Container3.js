import React, { useState } from 'react'
import '../../../css/style.css'
import Container3_box from './Container3_box';

function Container3() {

      const arr = ["photos/doctor1.PNG", "photos/doctor2.PNG", "photos/doctor3.PNG", "photos/doctor.png"]
      const users = [{
        name: "Denis",
        surname: "Omerov",
        category: "Doctor Of Dental Medicine",
        url: "hotos/doctor1.PNG"
      },
      {
        name: "Zoran",
        surname: "Šušak",
        category: "Oral Surgeon",
        url: "hotos/doctor2.PNG"
      },
      {
        name: "Lindim",
        surname: "Poshka",
        category: "Doctor Of Dental Medicine",
        url: "hotos/doctor3.PNG"
      },
      {
        name: "asdda",
        surname: "Poadsdasshka",
        category: "asdads",
        url: "hotos/doctor.PNG"
      }
    ]

      const [threeUrls, setThreeUrls] = useState([arr[0], arr[1], arr[2]])

      const [index, setIndex] = useState(1);

      function goRight() {

        if(index == 1){
            setIndex(prev => prev-1)
            setThreeUrls([arr[arr.length-1], arr[index-1], arr[index]])
        }
        else if(index == 0){
            setIndex(arr.length-1)
            setThreeUrls([arr[arr.length-2], arr[arr.length-1], arr[index]])
        }
        else{
            setIndex(prev => prev-1)
            setThreeUrls([arr[index-2], arr[index-1], arr[index]])
        }
        console.log(index)

      }


      function goLeft() {

        if(index == arr.length-2){
            setIndex(prev => prev+1)
            setThreeUrls([arr[index], arr[index+1], arr[0]])
        }
        else if(index == arr.length-1){
            setIndex(0)
            setThreeUrls([arr[index], arr[0], arr[1]])
        }
        else{
            setIndex(prev => prev+1)
            setThreeUrls([arr[index], arr[index+1], arr[index+2]])
        }
        console.log(index)

      }

      return (
        <div className="container container3" id="container3">
            
            <h1>Our Team</h1>
        
            <ul id="doctors">

                {threeUrls.map((e, index) => (
                    
                    <Container3_box
                    key={`${Math.random()}`}
                    name={`${users[index].name} ${users[index].surname}`} 
                    category={users[index].category} 
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