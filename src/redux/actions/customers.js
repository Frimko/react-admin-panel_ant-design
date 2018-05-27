import { createAction } from 'redux-act';

export const fetch = createAction('SELECT_CUSTOMERS', (type, page) => ({ type, page }));
export const fetched = createAction('SELECT_CUSTOMERS_SUCCESS');
export const fetchError = createAction('SELECT_CUSTOMERS_FAILURE');

export const edit = createAction('EDIT_CUSTOMERS', (id, values) => ({ id, values }));
export const edited = createAction('EDIT_CUSTOMERS_SUCCESS');
export const editError = createAction('EDIT_CUSTOMERS_FAILURE');

export const getOneItem = createAction('GET_ITEM_CUSTOMERS', (type, id) => ({ type, id }));
export const getItemSucceess = createAction('GET_ITEM_CUSTOMERS_SUCCESS');
export const getItemError = createAction('GET_ITEM_CUSTOMERS_FAILURE');
