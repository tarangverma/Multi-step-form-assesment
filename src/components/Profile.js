import React from 'react'
import Form1 from './Form1'
import './Profile.css'

function Profile() {
  return (
    <div className='box'>
        <div className='profile'>
             <div className='heading'>
              <img className='logo' src='https://cdn.iconscout.com/icon/free/png-256/flash-dc-superhero-fastest-man-hero-justice-league-earth-saver-28697.png' alt='no-img' height={30} width={30}>
              </img>
              <p className='para'>
                BeInsurance
                </p>
                </div>
             <img className='p-img' 
             src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' 
             alt='no-img'></img>
             <div>
              <p className='name'>Jacob Jones</p>
             </div>
             <div className='detail'>
             <div className='details'>
             <img src='https://img.icons8.com/material-outlined/512/mail.png' alt='no-img' height={25} width={25} ></img>
             <p>Jacksonjn@gmail.com</p>
             </div>
             <div className='details'>
             <img src='https://img.icons8.com/ios-glyphs/512/phone.png' alt='no-img' height={25} width={25} ></img>
             <p>(316) 555-254</p>
             </div>
             <div className='details'>
             <img src='https://img.icons8.com/material-outlined/512/place-marker.png' alt='no-img' height={25} width={25} ></img>
             <p>3891 Ranchview Dr.Richardson, California 35485</p>
             </div>
             <div className='details'>
             <img src='https://img.icons8.com/ios-glyphs/512/user.png' alt='no-img' height={25} width={25} ></img>
             <p>Insurance Id 2458762</p>
             </div>
             </div>
        </div>
        <Form1 />
    </div>
  )
}

export default Profile