/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import './index.scss'
import {  Row, Col } from 'react-bootstrap'

import HomeCard from './HomeCard'

const SectionTwo = () => {
  return (
    <Row className='sectionTwo'>
      <div className='row title'>
        <h2 className='text-center'>Top Ranked Appartments</h2>
      </div>
      <div className="row card-container">
        <Col md={6}>
          <HomeCard />
        </Col>
        <Col md={6}>
          <HomeCard />
        </Col>
        <Col md={6}>
          <HomeCard />
        </Col>
        <Col md={6}>
          <HomeCard />
        </Col>
      </div>
    </Row>
  )
}

export default SectionTwo
