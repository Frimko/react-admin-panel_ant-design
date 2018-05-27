import React from 'react';
import { Menu as AntMenu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const selected = !!window && window.location ? window.location.pathname : 'customers';

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
  return (
    <AntMenu theme="dark" mode="inline" defaultSelectedKeys={[selected]}>
      {
        menuItems.map((item) => (
          <AntMenu.Item key={item.link}>
            <NavLink to={item.link}>
              <Icon type={item.icon}/>
              <span>{item.name}</span>
            </NavLink>
          </AntMenu.Item>
        ))
      }
    </AntMenu>
  );
};

export default Menu;
