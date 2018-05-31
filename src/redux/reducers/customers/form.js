import { createReducer } from 'redux-act';

import {
  getItemSuccess,
  getItemError,
  getItem,
  editItem,
  editItemSuccess,
  editItemError,
  addItemSuccess, addItemError, addItem,
} from 'actions/customers';

const initialState = {
  loading: false,
  errorText: null,
  successText: null,
};

const loadingTrue = (state) => ({
  ...state,
  loading: true,
  errorText: null,
  successText: null,
});

const loadingFalse = (state) => ({
  ...state,
  loading: false,
});

const error = (state, payload) => ({
  ...state,
  loading: false,
  errorText: payload,
  successText: null,
});

const successText = (state, payload) => ({
  ...state,
  successText: payload,
  errorText: null,
  loading: false,
});

export default createReducer({
  [getItem]: loadingTrue,
  [editItem]: loadingTrue,
  [addItem]: loadingTrue,
  [getItemSuccess]: loadingFalse,
  [addItemSuccess]: successText,
  [editItemSuccess]: successText,
  [getItemError]: error,
  [editItemError]: error,
  [addItemError]: error,
  ['@@redux-form/DESTROY']: (state, payload, meta) => {
    if (meta.form.indexOf('customers') > -1) {
      return initialState;
    } else {
      return state;
    }
  },
}, initialState);
