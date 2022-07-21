import React from 'react'

const Form = () => {
  return (
    <div className='form-container'>
      <form>
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

      <button>Cancel</button>
      <button>Submit</button>
    </div>
  )
}

export default Form
