import React from 'react';
import PropTypes from 'prop-types'
import { HeaderBody } from './styled'

const Header = (props) => {
  return (
    <HeaderBody>
      {props.trigger}
    </HeaderBody>
  )
};

Header.propTypes = {
  trigger: PropTypes.element.isRequired,
}

export default Header;
