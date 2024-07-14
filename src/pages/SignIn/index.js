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
        <Col className='form-part-sign-in d-flex flex-column justify-content-center align-items-center gap-4'>
          <div className='logo-container d-flex justify-content-center'>
            <img src={require('../../assets/logo.png')} alt='logo' />
          </div>
          <h2>Create an Account</h2>

          <Row>
            <Col className='d-flex justify-content-center gap-3'>
              <FacebookAuthButton text='Sign in with Facebook' />
              <GoogleAuthButton text='Sign in with Google' />
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center align-items-center'>
              <span className='or'>or</span>
            </Col>
          </Row>
          <Form>
            <Row className='d-flex justify-content-center align-items-center gap-3'>
              <Col className='d-flex'>
                <FormInput
                  name='Email'
                  placeholder='Email Address'
                  label='Email Address'
                  type='email'
                />
              </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center gap-3'>
              <Col className='d-flex'>
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
        </Col>
      </Row>
    </Container>
  )
}

export default SignIn