import React from 'react';
import { Menu as AntMenu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';

const Menu = ({ location }) => {
  //const selected = !!window && window.location ? window.location.pathname : 'customers';

  const menuItems = [
    {
      link: '/customers/',
      name: 'Customer',
      icon: 'file-text',
    },
    {
      link: '/products/',
      name: 'Products',
      icon: 'file-text',
    },
  ];
  let defaultSelectedKeys = menuItems[0].link;
  menuItems.some((item) => {
    var reg = new RegExp(`/${item.link}(.*)/`);
    if (reg.test(location.pathname)) {
      defaultSelectedKeys = item.link;
      return true;
    }
  });

  return (
    <AntMenu theme="dark" mode="inline" defaultSelectedKeys={[defaultSelectedKeys]}>
      {
        menuItems.map((item) => (
          <AntMenu.Item key={item.link}>
            <Link to={item.link}>
              <Icon type={item.icon}/>
              <span>{item.name}</span>
            </Link>
          </AntMenu.Item>
        ))
      }
    </AntMenu>
  );
};

export default withRouter(Menu);
