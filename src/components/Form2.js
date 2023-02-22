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
          <input type="text" placeholder="John Mac"></input>
         </div>
         <div className='info-detail'>
          <p>Phone Number</p>
          <input type="text" placeholder="+91 824468800"></input>
         </div>
         </div>
         <div className='info-2'>
         <div className='info-detail'>
          <p>Email</p>
          <input type="text" placeholder="John@gmail.com"></input>
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
          <input type="text" placeholder="Wipro"></input>
         </div>
         <div className='info-detail'>
          <p>Agent Name</p>
          <input type="text" placeholder="Jerry Summon"></input>
         </div>
         </div>
         <div className='info-2'>
         <div className='info-detail'>
          <p>Email</p>
          <input type="text" placeholder="John@gmail.com"></input>
         </div>
         <div className='info-detail'>
          <p>Phone Number</p>
          <input type="text" placeholder="+91 8154655100"></input>
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
          <input type="text" placeholder="544823"></input>
         </div>
         <div className='info-detail'>
          <p>Property Address</p>
          <input type="text" placeholder="Park Street"></input>
         </div>
         </div>
         
      </div>
    </div>
  )
}

export default Form2