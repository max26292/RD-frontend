import { REHYDRATE } from "redux-persist/lib/constants";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import localforage from 'localforage';
import { IAuthorization } from "types";
import {actions} from './slice';
import { isEmpty } from "lodash";
function* restroreData(){
  let data :IAuthorization = {};
  data = yield call(getStoredData) ;
  if(!isEmpty(data)){
    yield put(actions.setLoginInfo({data:data}));
  } 
}
async function getStoredData() {
  let result = await localforage.getItem<IAuthorization>('auth');
  
  return result;
}

export function* authorizeContainerSaga() {
  // yield takeLatest(actions.setLoginInfo.type, persitUserData);
  yield takeLatest(actions.restoreAuthInfo.type,restroreData);
}
