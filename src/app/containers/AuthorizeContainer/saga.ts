import { makeRequestAction } from 'helpers/apiProcesser';
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

export function* makeRequestApi(payload) {
  console.debug('in saga', {payload})
  makeRequestAction(payload);
}

export function* authorizeContainerSaga() {
  yield takeLatest(actions.login.type, makeRequestApi);
}
