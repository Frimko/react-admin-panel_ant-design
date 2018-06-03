import React, { Component } from 'react';
import { Layout as AntLayout } from 'antd';
import PropTypes from 'prop-types';
import logoSvg from 'svg/logo.svg';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Styleds from 'src/configStyleds';
import { Logo, Trigger } from './styled';

class Layout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const trigger = (
      <Trigger
        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={this.toggle}
      />
    );
    return (
      <AntLayout>
        <AntLayout.Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width={Styleds.siderWidth}
        >
          <Logo img={logoSvg} height={96}/>
          <Menu/>
        </AntLayout.Sider>
        <AntLayout style={{ height: '100vh', overflow: 'hidden' }} id="mainContainer">
          <Header trigger={trigger}/>
          {this.props.children}
        </AntLayout>
      </AntLayout>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
