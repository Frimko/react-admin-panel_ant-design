/**
 * Created by Frimko on 23.04.2018.
 * mailto ccc-car@yandex.ru.
 */
import { createReducer } from 'redux-act'

import { fetch, fetched, fetchError } from 'actions/customers'

const initialState = {
  items: [],
  pagesCount: 0,
  error: null,
}

export default createReducer({
  [fetched]: (state, payload) => ({
    ...state,
    items: [...payload.items],
    pagesCount: payload.pagesCount,
    error: false
  }),
  [fetchError]: (state, payload) => ({
    ...state,
    error: payload.error
  })
}, initialState)
