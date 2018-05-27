import React from 'react';
import PropTypes from 'prop-types';
import { BodyLoader, WrapperLoader, InnerLoader, TextLoader } from './styled';

const Index = ({ hidden, fullScreen, overlay, inPage }) => {
  return (
    <BodyLoader fullScreen={fullScreen} hidden={hidden} overlay={overlay} inPage={inPage}>
      <WrapperLoader>
        <InnerLoader/>
        <TextLoader>ЗАГРУЗКА</TextLoader>
      </WrapperLoader>
    </BodyLoader>
  );
};

Index.propTypes = {
  hidden: PropTypes.bool,
  fullScreen: PropTypes.bool,
  overlay: PropTypes.bool,
  inPage: PropTypes.bool,
};

export default Index;
