/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import LocationCard from './LocationCard'

import './index.scss'

const image1 = require('../../../assets/location_one.png')
const image2 = require('../../../assets/location_two.png')
const image3 = require('../../../assets/location_three.png')
const image4 = require('../../../assets/location_four.png')
const image5 = require('../../../assets/location_four.png')

function SectionThree() {
  return (
    <Row className='sectionThree'>
      <Row className='wrapper'>
        <Col className='col-lg-12 title'>
          <h2 className='text-center'>We are available in the whole parts of Rwanda</h2>
        </Col>

        <Row className='card-container'>
          <LocationCard image={image1} />
          <LocationCard image={image2} />
          <LocationCard image={image3} />
          <LocationCard image={image4} />
          <LocationCard image={image5} />
        </Row>
      </Row>
    </Row>
  )
}

export default SectionThree