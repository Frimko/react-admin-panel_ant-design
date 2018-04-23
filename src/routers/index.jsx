import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Layout from 'components/Layout';
import Customers from 'containers/Customers';
import Products from 'containers/Products';

const Routers = (props) => {
  const routes = [
    {
      path: '/',
      component: Customers,
    },
    {
      path: '/customers',
      component: Customers,
    },
    {
      path: '/products',
      component: Products,
    },
  ]
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {
            routes.map(({path, component}, key) => (
              <Route key={key} exact path={path} component={component}/>
            ))
          }
        </Switch>
      </Layout>
    </BrowserRouter>
  )
};

export default Routers;
