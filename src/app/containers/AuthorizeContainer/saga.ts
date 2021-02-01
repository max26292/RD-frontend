import { REHYDRATE } from "redux-persist/lib/constants";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import localforage from 'localforage';
import { IAuthorization } from "types";
import { actions } from './slice';
import { isEmpty } from "lodash";
import { isLoading, isLoaded } from 'api';
function* restroreData() {
  yield put(isLoading({}));
  let data: IAuthorization | string = {};
  data = yield call(getStoredData);
  console.debug({ data });
  if (!isEmpty(data)) {
    yield put(actions.setLoginInfo({ data: data }));
    yield put(isLoaded({}));
  } 

}
async function getStoredData() {
  let result = await localforage.getItem<IAuthorization>('auth');
  // return result;
  
  if (!isEmpty(result)) {
    return result;
  }
  return {
    token:'no_data'
  };
 
}

export function* authorizeContainerSaga() {
  // yield takeLatest(actions.setLoginInfo.type, persitUserData);
  yield takeLatest(actions.restoreAuthInfo.type, restroreData);
}
