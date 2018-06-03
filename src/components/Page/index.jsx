import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import PageLoader from 'containers/PageLoader';
import {BackTop} from 'antd';

import {PageBody, Content, WrapBody} from './styled';

const Page = (props) => (
  <WrapBody>
    <PageBody id="pageBody">
      <Helmet title={props.title}/>
      <PageLoader/>
      <Content>
        <BackTop target={() => document.getElementById('pageBody')}/>
        <h1>{props.title}</h1>
        {props.children}
      </Content>
    </PageBody>
  </WrapBody>
);

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
export default Page;
