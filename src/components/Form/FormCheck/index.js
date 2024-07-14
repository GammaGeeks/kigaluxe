import React from 'react'
import { Form } from "react-bootstrap"

import './index.scss'

function FormInput({
  name,
  type,
  value = null,
  placeholder = null,
  inline = false,
  label = null,
}) {
  return (
    <Form.Check
      id={`default-${type}`}
      inline={inline}
      type={type}
      label={label}
      name={name}
    />
  )
}

export default FormInput