import React from 'react';
import { Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import Layout from 'components/Layout';
import Customers from 'containers/Customers';
import Products from 'containers/Products';

const history = createHistory();
const Routers = () => {
  const routes = [
    {
      path: '/',
      exact: true,
      component: Customers,
    },
    {
      path: '/customers/',
      component: Customers,
    },
    {
      path: '/products',
      component: Products,
    },
  ];
  return (
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          {
            routes.map(({ path, component, exact }) => (
              <Route key={path} exact={!!exact} path={path} component={component}/>
            ))
          }
        </Switch>
      </Layout>
    </ConnectedRouter>
  );
};

export default Routers;
