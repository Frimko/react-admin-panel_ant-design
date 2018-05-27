import { getAllItems, getItem } from 'api/index';
import { takeEvery, call, put, fork } from 'redux-saga/effects';
import { normalizeData } from 'utils';
import { schema } from 'normalizr';

import { fetch, fetched, fetchError, getOneItem, getItemSucceess, getItemError } from 'actions/customers';
import { showLoaderInPage, hideLoaderInPage } from 'actions/main';

const customersSchema = new schema.Entity('customers');

export function* getCustomersItems() {
  yield takeEvery(fetch.getType(), function* ({ payload }) {
    try {
      yield put(showLoaderInPage());

      const { data } = yield call(getAllItems, payload);
      // modify api
      const normalizedData = normalizeData(
        data.items,
        'customers',
        customersSchema
      );

      const modifyData = {
        items: normalizedData,
        pageCount: data.pages,
      };
      yield put(hideLoaderInPage());
      yield put(fetched(modifyData));
    } catch (e) {
      yield put(fetchError(e));
    }
  });
}

export function* getCustomersOneItem() {
  yield takeEvery(getOneItem.getType(), function* ({ payload }) {
    try {
      yield put(showLoaderInPage());

      const { data } = yield call(getItem, payload);
      yield put(hideLoaderInPage());
      yield put(getItemSucceess(data));
    } catch (e) {
      yield put(getItemError(e));
    }
  });
}

export default function* () {
  yield [
    fork(getCustomersItems),
    fork(getCustomersOneItem),
  ];
}
