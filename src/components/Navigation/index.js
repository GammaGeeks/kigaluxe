/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './index.scss'

function Navigation() {
  return (
    <div className='nav'>
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
    </div>
  )
}

export default Navigation