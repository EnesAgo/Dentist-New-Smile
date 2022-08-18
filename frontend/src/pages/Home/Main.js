import React from 'react'
import '../../css/style.css'


import Container1 from './parts/Container1';
import Container2 from './parts/Container2';
import Container3 from './parts/Container3';
import Container4 from './parts/Container4';
import Container5 from './parts/Container5';


function Main() {
      return (
        <div className="main">
            
            <Container1 />

            <Container2 />
            
            <Container5 />

            <Container3 />

            <Container4 />


        </div>
      )
  }


export default Main;