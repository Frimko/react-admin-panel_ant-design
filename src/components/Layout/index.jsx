import React, { Component } from 'react';
import { Layout, BackTop } from 'antd';
import { Logo, Trigger } from './styled';
import logoSvg from 'svg/logo.svg';
import Header from 'components/Header';
import Menu from 'components/Menu';

class SiderDemo extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const {children} = this.props;
    const trigger = (
      <Trigger
        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={this.toggle}
      />
    )
    return (
      <Layout>
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <Logo img={logoSvg} height={96}/>
          <Menu/>
        </Layout.Sider>
        <Layout style={{height: '100vh', overflow: 'scroll'}} id="mainContainer">
          <BackTop target={() => document.getElementById('mainContainer')}/>
          <Header trigger={trigger}/>
          {children}
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo
