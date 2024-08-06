import React from 'react'
import { useNavigate } from "react-router-dom";
import './index.scss'

function SectionOne() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  return (
  <div className='row sectionOne'>
    <div className='textSection'>
      <div className='firstText'>A new way to find your properties</div>
      <div className='secondText'>Unlock The Door To Your New Home With Ease</div>
      <div className='buttonSection'>
        {
          user ? (
            <>
              <div className='firstText'>Hi, {user.firstname}. <br />Welcome to KigaluXe platform.</div>
            </>
          ) : (
            <>
              <button onClick={() => navigate('/auth/sign_up')}>Get Started</button>
              <button>Contact Us</button>
            </>
          )
        }
      </div>
    </div>
  </div>
  )
}

export default SectionOne