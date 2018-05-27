import React from 'react';
import { connect } from 'react-redux';
import Loader from 'components/Loader';

const PageLoader = ({ loader }) => (<Loader overlay inPage fullScreen hidden={!loader}/>);

export default connect(
  ({ main }) => ({ loader: main.loader })
)(PageLoader);
