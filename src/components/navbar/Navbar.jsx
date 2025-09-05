import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className=' position-fixed w-100 z-1'>
      <nav className="navbar navbar-expand-md  py-1 px-5 ">
  <div className="container-fluid">
    <Link to="/home" className="navbar-brand text-white text-capitalize" >Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/about" className="nav-link  text-uppercase" aria-current="page" >about</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" className="nav-link text-uppercase" >portfolio</NavLink>
        </li>
     <li className="nav-item">
          <NavLink to="/contact" className="nav-link text-uppercase" >contact</NavLink>
        </li>
      
      </ul>
    
    </div>
  </div>
</nav>

    </div>
  )
}
