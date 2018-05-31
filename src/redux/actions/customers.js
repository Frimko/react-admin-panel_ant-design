import { createAction } from 'redux-act';

export const fetch = createAction('SELECT_CUSTOMERS');
export const fetched = createAction('SELECT_CUSTOMERS_SUCCESS');
export const fetchError = createAction('SELECT_CUSTOMERS_FAILURE');

export const editItem = createAction('EDIT_ITEM_CUSTOMERS', (id, data) => ({ id, data }));
export const editItemSuccess = createAction('EDIT_ITEM_CUSTOMERS_SUCCESS');
export const editItemError = createAction('EDIT_ITEM_CUSTOMERS_FAILURE');

export const editItemTable = createAction('EDIT_ITEM_CUSTOMERS_TABLE', (id, data) => ({ id, data }));

export const deleteItem = createAction('DELETE_ITEM_CUSTOMERS');
export const deleteItemSuccess = createAction('DELETE_ITEM_CUSTOMERS_SUCCESS');
export const deleteItemError = createAction('DELETE_ITEM_CUSTOMERS_FAILURE');

export const getItem = createAction('GET_ITEM_CUSTOMERS');
export const getItemSuccess = createAction('GET_ITEM_CUSTOMERS_SUCCESS');
export const getItemError = createAction('GET_ITEM_CUSTOMERS_FAILURE');

export const addItem = createAction('SET_ITEM_CUSTOMERS');
export const addItemSuccess = createAction('SET_ITEM_CUSTOMERS_SUCCESS');
export const addItemError = createAction('SET_ITEM_CUSTOMERS_FAILURE');
