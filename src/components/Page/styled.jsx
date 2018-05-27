import styled from 'react-emotion';
import { Layout } from 'antd';

export const PageBody = styled(Layout.Content)`
    margin: 64px 0 0;
      background: #fff; 
      position: relative;
      overflow-x:hidden;
      overflow-y:auto;
      minHeight: 280px
`;

export const Content = styled('div')`
     padding: 24px;
`;
export const PageBodySpin = styled('div')`
        opacity: 0.7;
    background-color: green;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 99999;
`;
