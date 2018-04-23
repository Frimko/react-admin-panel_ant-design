import { createAction } from 'redux-act'

export const fetch = createAction('SELECT_CUSTOMERS', (type, page) => ({type, page}))
export const fetched = createAction('SELECT_CUSTOMERS_SUCCESS')
export const fetchError = createAction('SELECT_CUSTOMERS_FAILURE')
