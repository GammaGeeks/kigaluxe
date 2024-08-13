import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Aside from './Aside'
import Listings from './Listings'

function MainSection() {
  return (
    <Row style={{ backgroundColor: '#053C4B', margin: 'auto' }}>
      <Col md={3} className='py-4'>
        <Aside />
      </Col>
      <Col md={9} className='py-4'>
        <Listings />
      </Col>
    </Row>
  )
}

export default MainSection
