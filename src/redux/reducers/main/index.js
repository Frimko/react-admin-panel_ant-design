import { createReducer } from 'redux-act';

import { showLoaderInPage, hideLoaderInPage } from 'actions/main';
import { fetchError } from 'actions/customers';

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
  [fetchError]: state => ({
    ...state,
    loader: false,
  }),
}, initialState);
