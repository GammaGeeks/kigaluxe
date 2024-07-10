/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Col } from 'react-bootstrap'

import './index.scss'

const LocationCard = ({image, title}) => {

  return (
    <Col
      xs={12}
      xxs={12}
      sm={12}
      md={6}
      lg={2}
      xxl={2}
      className="card-location align-self-center"
    >
      <img className='img-fluid' src={image} alt='Image one' />
      <div className='content'>
        <div className='text-center'>
          <h4>{title}</h4>
        </div>
      </div>
    </Col>
  )
}

export default LocationCard