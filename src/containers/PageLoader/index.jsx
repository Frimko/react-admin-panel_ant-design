import React from 'react';
import { connect } from 'react-redux';
import Loader from 'components/Loader';

/* eslint react/prop-types: 0 */

const PageLoader = ({ loader }) => (<Loader overlay inPage fullScreen hidden={!loader}/>);

export default connect(
  ({ main }) => ({ loader: main.loader })
)(PageLoader);
