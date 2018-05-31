import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducers from '../reducers/index';
import sagas from '../sagas/index';

let initialState = {};
const sagaMiddleware = createSagaMiddleware();
const middleware = routerMiddleware(createHistory());
const enhancers = [
  applyMiddleware(sagaMiddleware),
  applyMiddleware(middleware),
];

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV === 'development' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
/* eslint-enable */

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(...enhancers)
);
sagaMiddleware.run(sagas);
export default store;
