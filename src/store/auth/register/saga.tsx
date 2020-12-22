/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {  fork, put, all, call } from 'redux-saga/effects';
import * as Eff from 'redux-saga/effects'
//============ Redux States for Register =============*
import { REGISTER_USER } from './actionTypes';
import { registerUserSuccessful, apiError } from './actions';

//============ Authentication Functions =============*
import { postRegister } from '../../../helpers/authUtils';

//============ Dispatch Redux Actions directly =============*

const takeEvery: any = Eff.takeEvery;      // <-- new
const takeLatest: any = Eff.takeLatest;    // <-- new
function* registerUser({ payload: { user } }) {
    try {
        const response = yield call(postRegister, '/post-register', user);
        yield put(registerUserSuccessful(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

export function* watchUserRegister() {
    yield takeEvery(REGISTER_USER, registerUser)
}

function* accountSaga() {
    yield all([fork(watchUserRegister)]);
}

export default accountSaga;