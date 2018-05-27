import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PageLoader from 'containers/PageLoader';
import { PageBody, PageBodySpin, Content } from './styled';

const Page = (props) => (
  <PageBody>
    <Helmet title={props.title}/>
    <PageLoader/>
    <Content>
      {props.children}
    </Content>
  </PageBody>
);

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
export default Page;
