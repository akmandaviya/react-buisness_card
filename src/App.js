import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Form from './components/Form/Form'
import NavBar from "./components/NavBar/NavBar";
import Writeup from "./components/Writeup/Writeup.jsx";

function App() {

  return (
    <Router>
   <Routes>
     <Route exact path="/" element={<NavBar />}/>
     </Routes>
     <Routes>
     <Route exact path="/" element={<Writeup/>}/>
  </Routes>
      

      <Routes>
     
        <Route exact path="/form" element={<Form />} />
      </Routes> 


    </Router>
  )
}
export default App