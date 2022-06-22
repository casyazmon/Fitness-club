import React from 'react'
import './navbar.css'

import FitnessLogo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fitness__navbar'>
        <div className="container">
            <div className="fitness__navbar-container">
                <div className="fitness__navbar-logo">
                    <a href="#">
                        <img src={FitnessLogo} alt="my fitness log" />
                    </a>
                </div>
                <div className="fitness__navbar-links">
                        {/* <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul> */}
                        <Link className='navbar-links' to="/">Home</Link>
                        <Link className='navbar-links' to="/about">About</Link>
                        <Link className='navbar-links' to="/services">Services</Link>
                        <Link className='navbar-links' to="/contact">Contact</Link>
                </div>
                <div className="fitness__navbar_btns">
                        <a href="#" className='fitness__navbar-login-btn'>Login</a>
                        <a href="#" className='get-started-btn'>Get Stated</a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar