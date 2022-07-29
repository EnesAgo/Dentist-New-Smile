import React, { useState } from 'react'
import '../css/header.css'

function Header() {

    const [isActive, setIsActive] = useState("")

    function changeActive() {
        if(isActive == "" || !isActive || isActive == undefined){
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
                        <i className="fas fa-phone fa-rotate-90 headerLeftIcon"></i>
                        <a href="tel:+38979699379">070 600 370</a>
                    </div>
                    <div>
                        <i className="fas fa-envelope headerLeftIcon"></i>
                        <a href="mailto:enesago010@gmail.com">enesago010@gmail.com</a>
                    </div>
                </li>
                <li>
                    <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f headerRightIcon"></i></a>
                    <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter headerRightIcon"></i></a>
                    <a href="https://tiktok.com" target="_blank"><i className="fab fa-tiktok headerRightIcon"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram headerRightIcon"></i></a>
                    

                </li>
            </ul>

        </div>
        <div className="bot">
            
            <ul>
                <li className="firstLi">
                    <h3><span className="green">New</span>-Smile</h3>
                    <div>
                            <button id="searchSumbmit">
                                <i className="fas fa-search green"></i>
                            </button>
                            <input type="text" id="searchInput" placeholder="Enter Keyword..." />
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
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Doctors</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="login">
                                    <h4>Login/Register</h4>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    </div>
      )
  }


export default Header;