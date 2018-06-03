import styled from 'react-emotion';
import {Layout} from 'antd';

export const PageBody = styled(Layout.Content)`
      background: #fff; 
      position: relative;
      overflow-x:hidden;
      overflow-y:auto;
      
`;

export const Content = styled('div')`
    padding: 24px;
    background: #fff; 
    margin-bottom: 50px;
`;

export const WrapBody = styled('div')`
        padding: 24px;
        margin: 64px 0 0;
    minHeight: 280px;
    overflow-x: hidden;
    overflow-y: auto;
`;

