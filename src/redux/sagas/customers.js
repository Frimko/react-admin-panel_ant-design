import * as api from 'api/index';
import { takeEvery, call, put, fork, select } from 'redux-saga/effects';
import { initialize } from 'redux-form';
import { normalizeData } from 'utils';
import { schema } from 'normalizr';
import { message } from 'antd';

import {
  fetch,
  fetched,
  fetchError,
  getItem,
  getItemSuccess,
  getItemError,
  editItem,
  editItemSuccess,
  editItemError,
  deleteItem,
  deleteItemSuccess,
  deleteItemError,
  addItem,
  addItemSuccess,
  addItemError,
  editItemTable,
} from 'actions/customers';

import { byId } from 'selectors/customers';
import { showLoaderInPage, hideLoaderInPage } from 'actions/main';

const customersSchema = new schema.Entity('customers');
const tableName = 'customers';

export function* getCustomersItems() {
  yield takeEvery(fetch.getType(), function* ({ payload }) {
    try {
      yield put(showLoaderInPage());

      const { data } = yield call(api.getAllItems, tableName, payload);
      // modify api
      const normalizedData = normalizeData(
        data.items,
        tableName,
        customersSchema
      );

      const modifyData = {
        items: normalizedData,
        pageCount: data.pages,
      };
      yield put(hideLoaderInPage());
      yield put(fetched(modifyData));
    } catch (e) {
      yield put(fetchError(e.message));
    }
  });
}

export function* getCustomersItem() {
  yield takeEvery(getItem.getType(), function* ({ payload }) {
    try {
      const { data } = yield call(api.getItem, tableName, payload);
      yield put(initialize(tableName, data));
      yield put(getItemSuccess(data));
    } catch (e) {
      yield put(getItemError(e.message));
    }
  });
}

export function* updateCustomersItem() {
  yield takeEvery(editItem.getType(), function* ({ payload }) {
    const { id } = payload;
    try {
      const { data } = yield call(api.updateCustomer, id, payload.data);
      yield put(editItemSuccess('Запись обновлена'));
      const item = yield select(byId);
      if (item && item[id]) {
        yield put(editItemTable(id, data));
      }
    } catch (e) {
      yield put(editItemError(e.message));
    }
  });
}

export function* addCustomersItem() {
  yield takeEvery(addItem.getType(), function* ({ payload }) {
    try {
      yield call(api.addCustomer, payload);
      yield put(addItemSuccess('Запись добавлена'));
      yield put(fetch(0));
    } catch (e) {
      yield put(addItemError(e.message));
    }
  });
}

export function* deleteCustomersItem() {
  yield takeEvery(deleteItem.getType(), function* ({ payload }) {
    try {
      yield call(api.deleteItem, tableName, payload);
      yield put(deleteItemSuccess({ id: payload }));
      message.success('Запись удалена', 3);
    } catch (e) {
      yield put(deleteItemError(e.message));
      message.error(e.message, 3);
    }
  });
}

export default function* () {
  yield [
    fork(getCustomersItems),
    fork(getCustomersItem),
    fork(addCustomersItem),
    fork(updateCustomersItem),
    fork(deleteCustomersItem),
  ];
}
