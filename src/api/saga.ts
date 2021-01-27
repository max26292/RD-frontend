import { take, call, put, select, takeLatest, fork, cancel } from 'redux-saga/effects';
import { actions } from './slice';
import { requestApi } from './index';
import { IapiRequest } from 'types/apiType';
import { PayloadAction } from '@reduxjs/toolkit';
import { Task } from '@redux-saga/types'

let requestTasks: Task[] = [];

export function* makeRequestApi<T>(action: PayloadAction<IapiRequest<T>>) {
    console.debug('in saga', action.payload)
    const { payload } = action;
    const requestSyncTask = yield fork(() => processRequest(payload));
    yield requestTasks.push(requestSyncTask);
}
function* processRequest<T, TResponse>(payload:IapiRequest<T>){
    try{
        const response = yield call(requestApi<TResponse>(payload))
        console.debug('saga response',response);
        yield put(actions.requestSucess({}))
    }catch(error){
        console.debug({error})
        yield put (actions.requestFailed({}))
    }
}
function* cancelAllRequests() {
    // Cancel all current requests
    if (requestTasks.length > 0) {
        yield cancel(requestTasks);
    }
    requestTasks = [];
}
export function* apiProcessSaga() {
    yield takeLatest(actions.makeRequest.type, makeRequestApi);
}
