import { fork } from 'redux-saga/effects';

import customers from './customers';

export default function* rootSaga() {
  yield [
    fork(customers),
  ];
}
