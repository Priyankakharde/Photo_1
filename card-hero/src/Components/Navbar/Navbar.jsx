import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="nav-logo">
                <h2>Orange Media</h2>
            </div>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                </ul>
            </div>    
            <div className="btn">
                <button>Contact Us</button>    
            </div>  
        </div>
    </div>
  )
}

export default Navbar