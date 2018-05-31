import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntButton, Form } from 'antd';

const Button = ({ keyForm, buttonProps, formItemProps, text, inModalFooter }) => {
  if (inModalFooter) {
    return (
      <AntButton
        key={keyForm}
        {...buttonProps}
      >
        {text}
      </AntButton>
    );
  }
  return (
    <Form.Item
      key={keyForm}
      {...formItemProps}
    >
      <AntButton {...buttonProps}>
        {text}
      </AntButton>
    </Form.Item>
  );
};

Button.propTypes = {
  buttonProps: PropTypes.object,
  formItemProps: PropTypes.object,
  inModalFooter: PropTypes.bool,
  keyForm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  text: PropTypes.string.isRequired,
};

export default Button;

