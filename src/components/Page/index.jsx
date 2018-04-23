import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import { PageBody } from './styled';

const Page = (props) => (
  <PageBody>
    <Helmet title={props.title}/>
    {props.children}
  </PageBody>
)

Page.propTypes = {
  title: PropTypes.string,
}
export default Page;
