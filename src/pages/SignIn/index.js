import React from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import FacebookAuthButton from '../../components/FacebookAuthButton'
import GoogleAuthButton from '../../components/GoogleAuthButton'
import FormInput from '../../components/Form/FormInput'

import './index.scss'

function SignIn() {
  const navigate = useNavigate()

  return (
    <Container fluid>
      <Row className='signup-form'>
        <Col className='text-part-sign-in d-flex flex-column justify-content-center align-items-center gap-4'>
          <h2>Welcome to KigaluXe</h2>
          <p className='px-5 text-center'>
            Welcome to the world of KigaluXe Interior Design, where your dream living space becomes a reality.
          </p>
          
          <Button variant='main-color' onClick={() => navigate('/auth/sign_up')} className='btn-sign-in'>
            Sign Up
          </Button>
        </Col>
        <Col className='form-part-sign-in d-flex flex-column justify-content-center align-items-center gap-2'>
          <Row>
            <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
              <img className='logo-container' src={require('../../assets/logo/png/color_logo_no_background.png')} alt='logo' />
              <h2 class>Create an Account</h2>
            </div>
          </Row>

          <Row>
            <Col className='d-flex justify-content-center align-items-center gap-2'>
              <FacebookAuthButton text='Sign in with Facebook' />
              <GoogleAuthButton text='Sign in with Google' />
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center align-items-center'>
              <span className='or'>or</span>
            </Col>
          </Row>
          <Row style={{width: '40%'}}>
          <Form>
            <Row className='d-flex justify-content-center align-items-center gap-3 mb-1'>
              <Col className='d-grid'>
                <FormInput
                  name='Email'
                  placeholder='Email Address'
                  label='Email Address'
                  type='email'
                />
              </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center gap-3 mt-1'>
              <Col className='d-grid'>
                <FormInput
                  name='Password'
                  placeholder='Password'
                  label='Password'
                  type='password'
                />
              </Col>
            </Row>
            <Row>
              <Col className='d-grid my-5'>
                <Button variant='main-color' type='submit' className='btn-sign-in'>
                  Sign In
                </Button>
              </Col>
            </Row>
          </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default SignIn