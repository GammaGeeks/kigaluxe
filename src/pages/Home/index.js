/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Navigation from '../../components/Navigation'
import './index.scss'
import SectionOne from '../../components/HomePage/SectionOne'

const Home = () => {
  return (
    <div className='sectionOne'>
      <Navigation />
      <SectionOne />
    </div>
  )
}

export default Home