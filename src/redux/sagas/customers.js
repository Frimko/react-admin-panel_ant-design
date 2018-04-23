import { getAllItems } from 'api/index'
import { takeEvery, call, put, select } from 'redux-saga/effects'

import { fetch, fetched, fetchError } from 'actions/customers'


export default function* customers() {
  yield takeEvery(fetch.getType(), function* ({payload}) {
    console.log('payload', payload);
    try {
      const {data} = yield call(getAllItems, payload)
console.log('data', data);
      yield put(fetched(data))
    }
    catch (e) {
      yield put(fetchError(e))
    }
  })
}
