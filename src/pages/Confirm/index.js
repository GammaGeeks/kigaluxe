import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {ReactComponent as Icon} from '../../assets/svg/envelope.svg'
import FormInput from '../../components/Form/FormInput'

function Confirm() {
  return (
    <Container fluid>
      <Row className='signup-form'>
        <Col className='form-part-sign-in d-flex flex-column justify-content-center align-items-center gap-2'>
          {/* <h2>KigaluXe</h2> */}
          <img className='logo-container' src={require('../../assets/logo/png/color_logo_no_background.png')} alt='logo' />
          <Icon />
          <h1>Confirm your email</h1>
          <h3>Hi, firstname</h3>
          <p>Thank you for signing up with KigaluXe. Please confirm your email address <br />by filling the code sent to your email:</p>
          <FormInput name="code" label="code" />
          <Button variant='primary'>Confirm</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Confirm