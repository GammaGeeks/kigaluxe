import React from 'react'
import { Form } from "react-bootstrap"

import './index.scss'

function FormInput({
  name,
  type,
  value,
  placeholder = null,
  inline = false,
  label = null,
  onChange = null,
  onBlur = null,
  checked = null
}) {
  return (
    <Form.Check
      id={`default-${type}`}
      inline={inline}
      type={type}
      label={label}
      name={name}
      checked
      onChange={onChange}
      onBlur={onBlur}
      value
    />
  )
}

export default FormInput