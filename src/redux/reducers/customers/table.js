/**
 * Created by Frimko on 23.04.2018.
 * mailto ccc-car@yandex.ru.
 */
import { createReducer } from 'redux-act';
import {
  deleteItemError,
  deleteItemSuccess,
  editItemTable,
  fetched,
  fetchError,
  fetch,
} from 'actions/customers';

const initialState = {
  items: {
    byId: null,
    ids: [],
  },
  pageCount: 0,
  curPage: 0,
  errorText: null,
};

export default createReducer({
  [fetch]: (state, payload) => ({
    ...state,
    ...payload,
    curPage: payload,
  }),
  [fetched]: (state, payload) => ({
    ...state,
    ...payload,
    errorText: null,
  }),
  [fetchError]: (state, payload) => ({
    ...state,
    errorText: payload,
  }),
  [deleteItemError]: (state, payload) => ({
    ...state,
    errorText: payload,
  }),
  [deleteItemSuccess]: (state, payload) => {
    const ids = state.items.ids.filter(item => {
      return item !== payload.id;
    });
    delete state.items.byId[payload.id];
    return {
      ...state,
      errorText: null,
      items: {
        ...state.items,
        byId: state.items.byId,
        ids,
      },
    };
  },
  [editItemTable]: (state, payload) => {
    return {
      ...state,
      items: {
        ...state.items,
        byId: {
          ...state.items.byId,
          [payload.id]: payload.data,
        },
      },
    };
  },
}, initialState);
