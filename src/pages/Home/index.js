/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Navigation from '../../components/Navigation'
import SectionOne from '../../components/HomePage/SectionOne'
import SectionTwo from '../../components/HomePage/SectionTwo'
import Search from '../../components/HomePage/Search'

import './index.scss'

const Home = () => {
  return (
  <div className='page'>
    <Navigation />
    <SectionOne />
    <Search />
    <SectionTwo />
  </div>
  )
}

export default Home