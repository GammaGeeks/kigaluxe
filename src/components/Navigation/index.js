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
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
        </div>
    </div>
  )
}

export default Navigation