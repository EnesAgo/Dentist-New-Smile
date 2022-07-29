import React from 'react'

function Container3_box({ name, category, imgUrl, imgAlt="doctor" }) {
      return (
        <li>
            <img src={`${imgUrl}`} alt={`${imgAlt}`} id={`imageOne`} />
            <div>
                <h3>{name}</h3>
                <p>{category}</p>
            </div>
        </li>
      )
  }


export default Container3_box;