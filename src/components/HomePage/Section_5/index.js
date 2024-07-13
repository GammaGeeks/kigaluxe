import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

import './index.scss'
import types from '../../../data/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import FormInput from '../../Form/FormInput'
import FormSelect from '../../Form/FormSelect'


function SectionFive() {
  return (
    <Row className='sectionFive'>
      <Row className='form-container p-5 justify-content-center align-content-center'>
        <Col sm={12} md={6} className='card-form justify-content-center align-content-center px-5'>
          <Row className='form-part p-4'>
            <Row className='header-row'>
              <Col className='col-1 py-2 justify-content-center'>
                <FontAwesomeIcon className='img-fluid' icon={faEnvelope} size='2x' />
              </Col>
              <Col className='col-11 py-2 justify-content-center'>
                <h3>QUICK APPOINTMENT</h3>
              </Col>
            </Row>
            <Form>
              <Row className='first-row'>
                <Col>
                  <FormInput name="Firstname" label="Firstname" />
                </Col>
                <Col>
                  <FormInput name="Lastname" label="Lastname" />
                </Col>
              </Row>
              <FormInput
                newClass='mb-3'
                name="Email"
                type='email'
                label='Email Address'
                placeholder="name@example.com"
              />
              <FormInput
                newClass='mb-3'
                name="Phone"
                type='tel'
                label='Phone Address'
                placeholder="07xxxxxxxx"
              />
              <Row className='second-row'>
                <Col>
                  <FormSelect
                    name='Type'
                    label='Select Property Type'
                    options={types}
                  />
                </Col>
                <Col>
                  <FormInput
                    newClass='mb-3'
                    name="Price"
                    type='tel'
                    label={`Estimate the Price`}
                    placeholder="xxxxxxxx $"
                  />
                </Col>
              </Row>
              <div className="d-grid my-3">
                <Button variant='secondary-color'>Get an Appointment</Button>
              </div>
            </Form>
          </Row>
        </Col>
        <Col md={6} sm={12} className='text-part justify-content-center align-content-around'>
          <h3>Buy or Sell Your Property with KigaluXe.com</h3>
          <p>With Kigaluxe real estate website, you can promote your land, property & real estate projects.</p>
          <Button variant='tertiary-color'>View Properties</Button>
        </Col>
      </Row>
    </Row>
  )
}

export default SectionFive