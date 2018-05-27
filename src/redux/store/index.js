import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers/index';
import sagas from '../sagas/index';

let initialState = {};
const sagaMiddleware = createSagaMiddleware();
const enhancers = [
  applyMiddleware(sagaMiddleware),
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
