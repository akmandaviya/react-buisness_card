import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Data from './Data.jsx'
import './Form.css'


const Form = () => {

  let navigate = useNavigate()
  const tohandle = () => {
  navigate('/data')
  }
  

  return (
    <div className='container'>
      <form className='form-container' action={Data}> 
        <label for="fname">First Name</label>
        <input type="text"/>
        <label for="mname">Middle Name</label>
        <input type="text"/>
        <label for="lname">Last Name</label>
        <input type="text"/>
        <label for="designation">Designation</label>
        <input type="text"/>
        <label for="company">Company Name</label>
        <input type="text"/>
        <label for="contact">Contact Number</label>
        <input type="text"/>
        <label for="email">Email id</label>
        <input type="text"/>
        <label for="Website">Website URL</label>
        <input type="text"/>
      </form>


      <Link to='/'><button className='cnl-btn'>Cancel</button></Link>
      <Link to='/data'> <button className='sbt-btn' type='submit' onClick={tohandle}>Submit</button></Link>
      
      
    </div>
  )
}

export default Form
