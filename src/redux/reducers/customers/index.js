/**
 * Created by Frimko on 23.04.2018.
 * mailto ccc-car@yandex.ru.
 */
import { createReducer } from 'redux-act';

import { fetched, fetchError, getItemSucceess } from 'actions/customers';

const initialState = {
  items: {
    byId: {},
    ids: [],
  },
  editedRow: null,
  pageCount: 0,
  error: null,
};

export default createReducer({
  [fetched]: (state, payload) => ({
    ...state,
    ...payload,
    error: false,
  }),
  [fetchError]: (state, payload) => ({
    ...state,
    error: payload.error,
  }),
  [getItemSucceess]: (state, payload) => ({
    ...state,
    editedRow: payload,
  }),
}, initialState);
