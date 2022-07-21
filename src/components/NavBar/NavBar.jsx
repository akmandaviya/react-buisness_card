import React from 'react'
import './NavBar.css'
import { NavLink, Link,useNavigate} from 'react-router-dom'
import Logo from '../../Assests/logo.png'

const NavBar = () => {

// let navigate = useNavigate()
// const clickHandle = () => {
//   // window.location.pathname="form"

//   navigate('/')
// }

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
