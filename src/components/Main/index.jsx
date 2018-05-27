import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Loader from 'containers/Loader';

const Main = (props) => {
  return (
    <div>
      <Header/>
      <div className="container">
        {props.children}
      </div>
      <Loader/>
    </div>
  )
};

Main.propTypes = {
  children: PropTypes.any.isRequired,
};
export default Main;

