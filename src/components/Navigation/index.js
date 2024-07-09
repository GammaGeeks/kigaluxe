/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './index.scss'
import MenuButton from './MenuButton'

function Navigation() {
  const [navbar, setNavbar] = useState(false)

  const changeNavBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavBackground)

  return (
    <div className={`nav ${navbar ? 'active' : ''}`}>
      <div className='navLogo'>
        <img src={require('../../assets/logo.png')} alt='logo' />
      </div>
      <div className='navLinks'>
        <ul>
            <li className='link active'><a href='#'>Home</a></li>
            <li className='link'><a href='#'>Listings</a></li>
            <li className='link'><a href='#'>About</a></li>
        </ul>
      </div>
      <div className='navMenu'>
        <MenuButton />
      </div>
    </div>
  )
}

export default Navigation