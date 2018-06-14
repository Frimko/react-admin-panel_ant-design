import React from 'react';
import { Menu as AntMenu, Icon } from 'antd';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { getFlatMenuKeys } from 'utils';
import pathToRegexp from 'path-to-regexp';

const getMenuMatchKeys = (flatMenuKeys, paths) => {
  return paths.reduce((matchKeys, path) => (
    matchKeys.concat(flatMenuKeys.filter(item => pathToRegexp(item).test(path)),
    )), []);
};


const urlToList = (url) => {
  const urllist = url.split('/').filter(i => i);
  return urllist.map((urlItem, index) => {
    return `/${urllist.slice(0, index + 1).join('/')}/`;
  });
};

const Menu = ({ location }) => {
  const menu = [
    {
      path: '/',
      name: 'Таблицы',
      icon: 'table',
      children: [
        {
          name: 'Customer',
          path: '/customers/',
        },
        {
          name: 'Products',
          path: '/products/',
        },
      ],
    },
  ];
  const flatMenuKeys = getFlatMenuKeys(menu);
  const defaultSelectedKeys = getMenuMatchKeys(flatMenuKeys, urlToList(location.pathname));
  const getMenus = (menuTreeN, siderFoldN) => {
    return menuTreeN.map((item) => {
      if (item.children) {
        return (
          <AntMenu.SubMenu
            key={item.path}
            title={(
              <span>
                {item.icon && <Icon type={item.icon}/>}
                <span>{item.name}</span>
              </span>
            )}
          >
            {getMenus(item.children, siderFoldN)}
          </AntMenu.SubMenu>
        );
      }
      return (
        <AntMenu.Item key={item.path}>
          <Link to={item.path || '#'} style={siderFoldN ? { width: 10 } : {}}>
            <span>{item.icon && <Icon type={item.icon}/>}<span>{item.name}</span></span>
          </Link>
        </AntMenu.Item>
      );
    });
  };
  return (
    <AntMenu
      forceSubMenuRender
      theme="dark"
      mode="inline"
      defaultSelectedKeys={defaultSelectedKeys}
      selectedKeys={defaultSelectedKeys}
      defaultOpenKeys={['/']}
    >
      {getMenus(menu, true)}
    </AntMenu>
  );
};

Menu.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Menu);

