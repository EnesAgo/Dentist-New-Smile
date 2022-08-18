import React from 'react'
import { Link } from 'react-router-dom';

function Container3_box({ name, category, imgUrl, imgAlt="doctor" }) {
      return (
        <li>
          <Link to="/about">
            <img src={`${imgUrl}`} alt={`${imgAlt}`} id={`imageOne`} />
            <div>
                <h3>{name}</h3>
                <p>{category}</p>
            </div>
            </Link>
        </li>
      )
  }


export default Container3_box;