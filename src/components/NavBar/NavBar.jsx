import React from 'react'
import './NavBar.css'
import { NavLink, Link} from 'react-router-dom'
import Logo from '../../Assests/logo.png'

const NavBar = () => {
  return (
    <> 
 
 <Link to="/">
    <img className='logo' src= {Logo}/>
    </Link> 
     
    <nav>
    <NavLink  className="nav-link" to="/about">
     About us
    </NavLink>

    <NavLink className="nav-link" to="/features">
     Features
    </NavLink>

    <NavLink className="nav-link"  to="/about">
     Pricing
    </NavLink>

    <NavLink className="nav-link"  to="/form">
     <button className='create-btn'>Create a Card</button>
    </NavLink>
    </nav>
    </>
  )
}

export default NavBar
