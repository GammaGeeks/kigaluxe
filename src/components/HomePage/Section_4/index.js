import React from 'react'
import { Col, Row } from 'react-bootstrap'

import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faFile, faLocationDot, faUsers } from '@fortawesome/free-solid-svg-icons'

function SectionFour() {
  return (
    <Row className='sectionFour'>
      <Col className='col-lg-12 title'>
        <h2 className='text-center'>Why Choose Us</h2>
      </Col>
      <Row className='item-container'>
        <Col className='item'>
          <span className='icon'><FontAwesomeIcon icon={faLocationDot} /></span>
          <h4 className='numbers'>1000+</h4>
          <p className='subtitle'>Year of House</p>
        </Col>
        <Col className='item'>
          <span className='icon'><FontAwesomeIcon icon={faFile} /></span>
          <h4 className='numbers'>1000+</h4>
          <p className='subtitle'>Projects Delivered</p>
        </Col>
        <Col className='item'>
          <span className='icon'><FontAwesomeIcon icon={faUsers} /></span>
          <h4 className='numbers'>1000+</h4>
          <p className='subtitle'>Satisfied Customers</p>
        </Col>
        <Col className='item'>
          <span className='icon'><FontAwesomeIcon icon={faDollarSign} /></span>
          <h4 className='numbers'>1000+</h4>
          <p className='subtitle'>Cheap Rates</p>
        </Col>
      </Row>
    </Row>
  )
}

export default SectionFour