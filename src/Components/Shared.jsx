import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'

function Shared() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div> 
  )
}

export default Shared

