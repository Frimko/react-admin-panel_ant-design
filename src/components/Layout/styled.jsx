import styled from 'react-emotion'
import { Icon } from 'antd';

export const Logo = styled('div')`
height: ${prop => prop.height}px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${prop => prop.img});
`
export const  Trigger = styled(Icon)`
font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
  color: white;
`
