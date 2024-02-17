import React, { useState } from 'react'
const PhoneOtpLogin = () => {
  let [phone, setPhone]=useState("")
  const handleChange = (e)=>{
   setPhone(e.target.value)
  }

  const handlePhoneSubmit=(event)=>{
    event.preventDefault();
    const regex = /[^0-9]]/g;
    if(phone.length<10 || regex.test(phone)){
      alert('Invalid Phone Number')
      return;
    }
  }
  return (
    <div>
      <form onSubmit={handlePhoneSubmit}>
        <input type="text" value={phone} onChange={handleChange} placeholder='Enter your phone number'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default PhoneOtpLogin