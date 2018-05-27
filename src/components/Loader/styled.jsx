import React from 'react';
import styled, { css, keyframes } from 'react-emotion';
import Styleds from 'src/configStyleds';


export const BodyLoader = styled('div')`
  display: block;
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: ${props => props.fullScreen ? 'fixed' : 'absolute'};
  z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.overlay ? 0.8 : 1};
  text-align: center;
  ${props => {
    if (props.hidden) {
      return css`
      z-index: -1;
      opacity: 0;
      transition: opacity 1s ease 0.5s, z-index 0.1s ease 1.5s;`;
    }
  }}
  ${props => {
    if (props.inPage) {
      return css`
      padding-right: ${Styleds.siderWidth}px; `;
    }
  }}
`;
export const WrapperLoader = styled('div')`
    width: 100px;
    height: 100px;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
`;

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
export const InnerLoader = styled('div')`
   width: 40px;
  height: 40px;
  margin: 0 auto;
  text-indent: -12345px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  border-left: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  z-index: 100001;
  animation: ${spinner} 600ms infinite linear;
`;

export const TextLoader = styled('div')`
width: 100px;
    height: 20px;
    text-align: center;
    font-size: 12px;
    letter-spacing: 4px;
    color: #000;
`;
