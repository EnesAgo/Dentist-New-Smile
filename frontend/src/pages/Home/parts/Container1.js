import React from 'react'
import { Link } from 'react-router-dom';
import '../../../css/style.css'

function Container1() {
      return (
        <div className="container container1" id="container1">
            <h2>LET'S MAKE YOUR TEETH HAPPIER</h2>
            <h1>NEW SMILE</h1>

            <div className="consultBut">
                <p>
                  <Link to="/contact" style={{color:"#fff"}}>let's consult</Link>
                </p>
            </div>
        </div>
      )
  }


export default Container1;