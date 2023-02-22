import React from 'react'
import "./Form2.css"

function Form2() {
  return (
    <div className='head'>
      <div className='head-1'>
        <div className='head-img'><img src='https://cdn-icons-png.flaticon.com/512/1077/1077114.png' height={15} width={15}></img></div>
          <div className='head-para'><p>Signer Details</p></div>
      </div>
      <div className='info'>
         <div className='info-1'>
          <div className='info-detail'>
          <p>Full Name</p>
          <input></input>
         </div>
         <div className='info-detail'>
          <p>Phone Number</p>
          <input></input>
         </div>
         </div>
         <div className='info-2'>
         <div className='info-detail'>
          <p>Email</p>
          <input></input>
         </div>
         </div>
      </div>
      <div className='head-1'>
        <div className='head-img'><img src='https://cdn-icons-png.flaticon.com/512/1077/1077114.png' height={15} width={15}></img></div>
          <div className='head-para'><p>Title Company Details</p></div>
      </div>
      <div className='info'>
         <div className='info-1'>
          <div className='info-detail'>
          <p>Company Name</p>
          <input></input>
         </div>
         <div className='info-detail'>
          <p>Full Name</p>
          <input></input>
         </div>
         </div>
         <div className='info-2'>
         <div className='info-detail'>
          <p>Email</p>
          <input></input>
         </div>
         <div className='info-detail'>
          <p>Phone Number</p>
          <input></input>
         </div>
         </div>
      </div>
      <div className='head-1'>
        <div className='head-img'><img src='https://cdn-icons-png.flaticon.com/512/1077/1077114.png' height={15} width={15}></img></div>
          <div className='head-para'><p>Order Info</p></div>
      </div>
      <div className='info'>
         <div className='info-1'>
          <div className='info-detail'>
          <p>Escrow # /Loan No</p>
          <input></input>
         </div>
         <div className='info-detail'>
          <p>Property Address</p>
          <input></input>
         </div>
         </div>
         
      </div>
    </div>
  )
}

export default Form2