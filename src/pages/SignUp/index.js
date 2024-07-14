import React from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import FacebookAuthButton from '../../components/FacebookAuthButton'
import GoogleAuthButton from '../../components/GoogleAuthButton'

import './index.scss'
import FormInput from '../../components/Form/FormInput'
import FormCheckPart from '../../components/Form/FormCheck'
import { useNavigate } from 'react-router-dom'

function SinUp() {
  const navigate = useNavigate()

  return (
    <Container fluid>
      <Row className='signup-form'>
        <Col className='form-part-sign-up d-flex flex-column justify-content-center align-items-center gap-4'>
          <div className='logo-container d-flex justify-content-center'>
            <img src={require('../../assets/logo.png')} alt='logo' />
          </div>
          <h2>Create an Account</h2>

          <Row>
            <Col className='d-flex justify-content-center gap-3'>
              <FacebookAuthButton text='Sign up with Facebook' />
              <GoogleAuthButton text='Sign up with Google' />
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center align-items-center'>
              <span className='or'>or</span>
            </Col>
          </Row>
          <Form>
            <Row className='d-flex justify-content-center align-items-center gap-3'>
              <Col>
                <FormInput
                  name='FisrtName'
                  placeholder='Firstname'
                  label='Firstname'
                />
              </Col>
              <Col>
                <FormInput
                  name='LastName'
                  placeholder='Lastname'
                  label='Lastname'
                />
              </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center gap-3'>
              <Col>
                <FormInput
                  name='Email'
                  placeholder='Email Address'
                  label='Email Address'
                  type='email'
                />
              </Col>
              <Col>
                <FormInput
                  name='Phone'
                  placeholder='Phone Number'
                  label='Phone Number'
                  type='tel'
                />
              </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center gap-3'>
              <div className="d-flex justify-content-evenly mt-4">
                <FormCheckPart
                  inline
                  type='radio'
                  label='Male'
                  name="gender"
                />
                <FormCheckPart
                  inline
                  type='radio'
                  label='Female'
                  name="gender"
                />
              </div>
            </Row>
            <Row className='d-flex justify-content-center align-items-center gap-3'>
              <Col>
                <FormInput
                  name='DOB'
                  placeholder='Date of Birth'
                  label='Date of Birth'
                  type='date'
                />
              </Col>
              <Col>
                <FormInput
                  name='Address'
                  placeholder='Fill Address'
                  label='Fill Address'
                />
              </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center gap-3'>
              <Col>
                <FormInput
                  name='Password'
                  placeholder='Password'
                  label='Password'
                  type='password'
                />
              </Col>
              <Col>
                <FormInput
                  name='Confirm_password'
                  placeholder='Confirm Password'
                  label='Confirm Password'
                  type='password'
                />
              </Col>
            </Row>
            <Row>
              <Col className='d-grid my-5'>
                <Button variant='main-color' type='submit' className='btn-sign-up'>
                  Sign Up
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col className='text-part-sign-up d-flex flex-column justify-content-center align-items-center gap-4'>
          <h2>Welcome to KigaluXe</h2>
          <p className='px-5 text-center'>
            Welcome to the world of KigaluXe Interior Design, where your dream living space becomes a reality.
          </p>
          
          <Button variant='main-color' onClick={() => navigate('/auth/sign_in')} className='btn-sign-in'>
            Sign In
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default SinUp