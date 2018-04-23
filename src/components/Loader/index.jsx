import React from 'react'
import PropTypes from 'prop-types'
import { BodyLoader, WrapperLoader, InnerLoader, TextLoader } from './styled'

const Index = ({hidden, fullScreen}) => {
  return (
    <BodyLoader fullScreen={fullScreen} hidden={hidden}>
      <WrapperLoader>
        <InnerLoader/>
        <TextLoader>ЗАГРУЗКА</TextLoader>
      </WrapperLoader>
    </BodyLoader>
  )
}

Index.propTypes = {
  hidden: PropTypes.bool,
  fullScreen: PropTypes.bool,
}

export default Index
