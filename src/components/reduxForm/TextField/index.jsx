import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form } from 'antd';

const TextField = ({ input, label, type, meta, placeholder, ...props }) => {
  const { touched, error, warning } = meta;

  let text = '';
  let validateStatus = '';

  if (touched) {
    if (error) {
      text = error;
      validateStatus = 'error';
    } else if (warning) {
      text = warning;
      validateStatus = 'warning';
    } else if (!!input.value) {
      validateStatus = 'success';
    }
  }
  return (
    <Form.Item
      label={label}
      validateStatus={validateStatus}
      hasFeedback={!!validateStatus}
      help={text}
      {...props}
    >
      <Input
        {...input}
        type={type}
        autoComplete={label}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

TextField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default TextField;

