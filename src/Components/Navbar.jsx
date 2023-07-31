import React from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png'

function Navbar() {
  return (
    <div className='navbar'>
      <h1>COMPENSATION REQUEST PORTAL</h1>
      <img src= {logo} alt="" />
    </div>
  )
}

export default Navbar;
 