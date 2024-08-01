import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import {ReactComponent as Icon} from '../../assets/svg/envelope.svg'
import FormInput from '../../components/Form/FormInput'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const ConfirmSchema = Yup.object().shape({
  code: Yup.string().required('Required').min(6),
})


function Confirm() {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    values,
  } = useFormik({
    validationSchema: ConfirmSchema,
    initialValues: {
      code: '',
    },
    onSubmit: (values) => {
        console.log(values)
        const {
            // eslint-disable-next-line no-unused-vars
            code
        } = values
        // dispatch(userAction.signup({
        //     firstname,
        //     lastname,
        //     email,
        //     phone,
        //     gender,
        //     password
        // })).then(() => navigate('/auth/confirm'));
    }
  });
  
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
          <Form onSubmit={handleSubmit}>
            <FormInput
              name="code"
              label="code"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.code}
            />
            {errors.code ? <p className="error-text text-center text-danger font-italic">{errors.code}</p> : ''}
            <Button variant='primary'>Confirm</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Confirm