import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../css/header.css'

function Header() {

    const [isActive, setIsActive] = useState("")

    function changeActive() {
        if(isActive === "" || !isActive || isActive === undefined){
            setIsActive("active")
        }
        else{
            setIsActive("")
        }
    }

      return (
        <div className="header">
        <div className="top">

            <ul>
                <li>
                    <div>
                        {/* <i className="fas fa-phone fa-rotate-90 headerLeftIcon"></i> */}
                        {/* <a className="link" href="tel:+38972232111">072 232 111</a> */}
                    <a className="link" href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f headerRightIcon"></i></a>
                    {/* <a className="link" href="https://twitter.com" target="_blank"><i className="fab fa-twitter headerRightIcon"></i></a> */}
                    <a className="link" href="https://tiktok.com" target="_blank"><i className="fab fa-tiktok headerRightIcon"></i></a>
                    <a className="link" href="https://www.instagram.com/newsmile.ohrid" target="_blank"><i className="fab fa-instagram headerRightIcon"></i></a>
                    </div>
                    <div>
                        <i className="fas fa-envelope headerLeftIcon"></i>
                        <a className="link" href="mailto:denizomerov@gmail.com">denizomerov@gmail.com</a>
                    </div>
                </li>

            </ul>

        </div>
        <div className="bot">
            
            <ul>
                <li className="firstLi">
                    <h3><span className="green">New</span>-Smile</h3>
                    {/* <div>
                            <button id="searchSumbmit">
                                <i className="fas fa-search green"></i>
                            </button>
                            <input type="text" id="searchInput" placeholder="Enter Keyword..." />
                    </div> */}
                    <div className="phoneNuumber">
                        <h3>
                            <a style={{color: "#ffd700", fontSize: "18px"}} href="tel:+38072232111">072 232 111</a>
                            <a style={{color: "#ffd700", fontSize: "18px", marginLeft: "25px"}} href="tel:+38946200400">046 200 400</a>
                        </h3>
                    </div>
                    <span onClick={changeActive} id="openNav" className="menubut">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </li>
                <li className={`secLi ${isActive}`}>
                    <ul className="navbar">
                        <li>
                            {/* <a className="link" href="#">Home</a> */}
                            <Link className='link' to="/" >Home</Link>
                        </li>
                        <li>
                            {/* <a className="link" href="#">About Us</a> */}
                            <Link className='link' to="/About" >About</Link>
                        </li>
                        <li>
                            <a className="link" href="#">Before/After</a>
                        </li>
                        <li>
                            {/* <a className="link" href="#">Instagram Posts</a> */}
                            <Link className='link' to="/posts" >Instagram Posts</Link>

                        </li>
                        <li>
                            {/* <a className="link" href="#">Contact</a> */}
                            <Link className='link' to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link className="link" to="/login">
                                <div className="login">
                                    <h4>Login/Register</h4>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    </div>
      )
  }


export default Header;