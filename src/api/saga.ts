import { take, call, put, select, takeLatest, fork, cancel, takeEvery } from 'redux-saga/effects';
import { actions } from './slice';
import { requestApi } from './index';
import { IapiRequest, IapiResponse } from 'types/apiType';
import { PayloadAction } from '@reduxjs/toolkit';
import { Task } from '@redux-saga/types'
import { ResponseFail, ResponseSuccess } from './types';

let requestTasks: Task[] = [];

export function* makeRequestApi<T>(action: PayloadAction<IapiRequest<T>>) {
    console.debug('in saga', action.payload)
    const { payload } = action;
    const requestSyncTask = yield fork(() => processRequest(payload));
    yield requestTasks.push(requestSyncTask);
}
function* processRequest<T>(payload: IapiRequest<T>) {
    try {
        const { action } = payload;
        const response = yield requestApi(payload);
        const data :ResponseFail|ResponseSuccess = response.data;
        yield put(action(response)); 
        if(response.status>=200 && response.status <300){
            yield put(actions.requestSucess<ResponseSuccess<typeof response>>(response))
        }else{
            yield put(actions.requestFailed(data))
        }
        

    } catch (error) {
        console.debug({ error })
        yield put(actions.requestFailed({}))
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
    yield takeEvery(actions.makeRequest.type, makeRequestApi);
}
