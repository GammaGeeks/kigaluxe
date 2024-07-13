import React from 'react'
import { FloatingLabel, Form } from "react-bootstrap"

function FormInput({
  name,
  type = 'text',
  value = null,
  placeholder = null,
  newClass = '',
  label = null,
}) {
  return (
    <FloatingLabel className={newClass} controlId={`floating${name}`} label={label}>
      <Form.Control type={type} placeholder={`${placeholder ? placeholder : name}`} />
    </FloatingLabel>
  )
}

export default FormInput