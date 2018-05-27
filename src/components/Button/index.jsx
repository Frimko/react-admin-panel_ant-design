import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntButton, Form } from 'antd';

const Button = ({ key, buttonProps, formItemProps, text, inModalFooter }) => {
  if (inModalFooter) {
    return (
      <AntButton
        key={key}
        {...buttonProps}
      >
        {text}
      </AntButton>
    );
  }
  return (
    <Form.Item
      key={key}
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
  key: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;

