import { createReducer } from 'redux-act';

import { showLoaderInPage, hideLoaderInPage } from 'actions/main';

const initialState = { loader: false };

export default createReducer({
  [showLoaderInPage]: state => ({
    ...state,
    loader: true,
  }),
  [hideLoaderInPage]: state => ({
    ...state,
    loader: false,
  }),
}, initialState);
