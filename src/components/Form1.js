import React from 'react'
import "./Form1.css"

function Form1() {
  return (
    <div className='form'>
        <div>

        <div className='forms'>
            <h1>Notary Signing Agent</h1>
            <p>Suitable for those who have purchased a brand new car</p>
            <a href='#'>View Details<img className='arrow' src='https://cdn-icons-png.flaticon.com/512/545/545682.png'  alt='no-img' height={15} width={15} /></a>
        </div>
        <div className='forms'>
            <h1>Remote Online Notary</h1>
            <p>Suitable for those who already have a valid third party cover</p>
            <a href='#'>View Details<img className='arrow' src='https://cdn-icons-png.flaticon.com/512/545/545682.png' alt='no-img' height={15} width={15} /></a>
        </div>
        <div className='forms'>
            <h1>Mobile General Notary</h1>
            <p>Suitable for those who use the car infrequently</p>
            <a href='#'>View Details<img className='arrow' src='https://cdn-icons-png.flaticon.com/512/545/545682.png' alt='no-img' height={15} width={15} /></a>
        </div>
        </div>
        <div className='section'>
            <h2 className='main-h'>Calculate your Costs for RON!</h2>
            <div className='detail'>
                <h2>No Extra Signatures</h2>
                <div className='input'>
                <p>Please enter zero, if only one signature is required</p>
                   <input type='text' placeholder="00"></input>
                </div>
            </div>
            <div className='detail'>
                <div className='input'>
                <h2 className='input-h'>How Many Files will you be uploading in the session</h2>
                   <input type='text' placeholder="00"></input>
                </div>
            </div>
            <div className='detail'>
                <div className='input'>
                <h2 className='input-h'>Number of Singers</h2>
                  <input type='text' placeholder="00"></input>
                </div>
            </div>
            <div className='detail'>
                <h2>Do you need Witness?</h2>
                <div className='input'>
                <p>Do not enter anything if you're bringing your own Witness</p>
                   <input type='text' placeholder="00"></input>
                </div>
            </div>
          
        </div>
    </div>
  )
}

export default Form1