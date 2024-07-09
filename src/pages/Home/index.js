/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Navigation from '../../components/Navigation'
import SectionOne from '../../components/HomePage/Section_1'
import SectionTwo from '../../components/HomePage/Section_2'
import Search from '../../components/HomePage/Search'

import './index.scss'
// import SectionThree from '../../components/HomePage/Section_3'

const Home = () => {
  return (
  <div className='container-fluid'>
    <Navigation />
    <SectionOne />
    <Search />
    <SectionTwo />
    {/* <SectionThree /> */}
  </div>
  )
}

export default Home