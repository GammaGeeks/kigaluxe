import {FloatingLabel, Form} from 'react-bootstrap';

function FormSelect({
    name,
    options = [],
    newClass = '',
    label = null,
  }) {
  return (
    <FloatingLabel className={newClass} controlId="floatingSelect" label={label}>
      <Form.Select aria-label="Floating label select example">
        {/* <option>Open this select menu</option> */}
        {options && options.map((v, k) => (
          <option key={k} value={v}>
            {v}
          </option>
        ))}
      </Form.Select>
    </FloatingLabel>
  );
}

export default FormSelect;