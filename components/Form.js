import React from 'react';

import style from '/styles/Form.module.scss'

import { Router, useRouter } from 'next/router';


const Form = () => {

    const router = useRouter();

    // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      fullname: event.target.fullname.value,
      emailaddress: event.target.emailaddress.value,
      phone: event.target.phone.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
    router.push('/')



}

  return (
    <>
    <div className={style.formContainer}>

    <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input type="text" name="fullname"  
        title='No numbers please'required maxLength={30}
        placeholder='' />

        <label htmlFor="emailaddress">Email address *</label>
        <input type="text" id='email' name="emailaddress" 
        required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
        placeholder=''/>

        <label htmlFor="phone">Phone</label>
        <input type="text" id='phone' name="emailaddress" 
         pattern='^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$'
        
        placeholder=''/>

        

        <label htmlFor="subject">Subject *</label>
        <input type="text" name="subject"  
        title='No numbers please'required maxLength={30}
         />

        <label htmlFor="Message">Message *</label>
        <textarea type="text" name="message"  
        title='No numbers please'required maxLength={1000}
        />

        <button type="submit">Submit</button>

    </form>
      
    </div>
    </>
  )
}

export default Form