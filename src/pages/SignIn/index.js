import React from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from "react-redux"
import { userAction } from '../../redux/actions';
import FacebookAuthButton from '../../components/FacebookAuthButton'
import GoogleAuthButton from '../../components/GoogleAuthButton'
import FormInput from '../../components/Form/FormInput'
import { RingLoader } from '../../components/Loaders'
import isObject from '../../utils/isObject'
import looper from '../../utils/loopObject'

import './index.scss'


const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});


function SignIn() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.user);
  const loginErrors = login.errors;
  const { loading, message } = login;

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    } = useFormik({
      validationSchema: LoginSchema,
      initialValues: { email: '', password: '' },
      onSubmit: (values) => {
        console.log("Login", values)
        dispatch(userAction.login(values)).then(() => navigate('/'));
    },
  });


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
            <Col className='d-flex justify-content-center align-items-center'>
              {
                message ? (<p className="text-success text-center"><strong>{message}</strong></p>) : ''
              }
              {
                loginErrors ? (
                  isObject(loginErrors) ? (
                    looper(loginErrors).map(item => item)
                  ) : (<p className="text-danger text-center"><strong>{loginErrors}</strong></p>)
                ) : ''
              }
              {
                loginErrors ? (
                  <p className="text-danger text-center"><strong>{loginErrors}</strong></p>
                ) : ''
              }
            </Col>

          </Row>
          <Row style={{width: '40%'}}>
          <Form onSubmit={handleSubmit}>
            <Row className='d-flex justify-content-center align-items-center gap-3 mb-1'>
              <Col className='d-grid'>
                <FormInput
                  name='email'
                  placeholder='Email Address'
                  label='Email Address'
                  type='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email ? <p className="error-text text-center text-danger font-italic">{errors.email}</p> : ''}
              </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center gap-3 mt-1'>
              <Col className='d-grid'>
                <FormInput
                  name='password'
                  placeholder='Password'
                  label='Password'
                  type='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password? <p className="error-text text-center text-danger font-italic">{errors.password}</p> : ''}
              </Col>
            </Row>
            <Row>
              <Col className='d-grid my-5'>
              {
                  loading ? (
                    <RingLoader height="80" width="80" />
                  ) : (
                    <Button variant='main-color' type='submit' className='btn-sign-in'>
                      Sign In
                    </Button>
                  )
                }
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