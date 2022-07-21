import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import Form from './components/Form/Form'
import NavBar from "./components/NavBar/NavBar";
import Banner from './Assests/banner.png'
import Sub_banner from './Assests/sub-banner.png'

function App() {

  return (
    <Router>


      <NavBar />
      <img className="banner" src={Banner} />

      <div className="box">
        <h4 className="heading4">Make your professional life easy</h4>
        <h3 className="heading1">Create your free</h3>
        <h1 className="heading2">Virtual buisness card</h1>
        <h4 className="heading3">Take your first step towards a success !!</h4>
      </div>

      <NavLink className="nav-link" to="/form">
        <button className='app-create-btn'>Create a Card</button>
      </NavLink>

      <img className="sub-banner" src={Sub_banner} />

      <div className="sub-box">
        <h4 className="heading5">Create your</h4>
        <h2 className="heading6">Digital buisness Card</h2>
        <h4 className="heading7">Just enter the information you <br />
          want to show on the card <br /> Share anywhere, anytime on any <br />Platform.
        </h4>  
      </div>


      <NavLink className="nav-link" to="/contact">
        <button className="contact-btn">Contact us</button>
        </NavLink>

{/*         
      <Routes>
        <Route exact path="/form" element={<Form />} />
      </Routes> */}


    </Router>
  )
}
export default App