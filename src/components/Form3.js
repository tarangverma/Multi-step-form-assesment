import React from 'react'
import "./Form3.css"

function Form3() {
  let handelSubmit = async (e) => {
     e.preventDefault();       
  }
      
  return (
    <div className='head'>
        <div className='head-1'>
        <div className='head-img'><img src='https://cdn-icons-png.flaticon.com/512/1077/1077114.png' height={15} width={15}></img></div>
          <div className='head-para'><p>Title Company Details</p></div>
      </div>
      <div className='info'>
         <div className='info-1'>
          <div className='info-detail'>
          <p>Enter Signing Location</p>
          <input type="text" placeholder="Park Street"></input>
         </div>
         </div>
         <div className='info-2'>
         <div className='info-detail'>
          <p>Date</p>
          <input type="text" placeholder="DD/MM/YYYY"></input>
         </div>
         <div className='info-detail'>
          <p>Time</p>
          <input type="text" placeholder="5:30 AM"></input>
         </div>
         </div>
      </div>
         <button type='submit' onClick={handelSubmit} className='button'>Schdule Appointment</button>
    </div>
  )
}

export default Form3