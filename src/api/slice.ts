import { PayloadAction } from '@reduxjs/toolkit';
import { Action } from 'history';
import { IapiRequest } from 'types/apiType';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { initRequestState, ResponseType } from './types';
import { history } from 'store/configureStore';

const initialState: initRequestState = {
  loading: false,
};

const apiProcessSlice = createSlice({
  name: 'request',
  initialState: initialState,
  reducers: {
    makeRequest<T, RT>(state, action: PayloadAction<IapiRequest<T>>) {
      state.loading = true;
    },
    requestSucess<T>(state, action: PayloadAction<ResponseType<T>>) {
      // state.loading = false;
      const { payload } = action;
      return {
        ...state,
        loading: false,
      };
    },
    requestFailed(state, action: PayloadAction<ResponseType>) {
      const { payload } = action;
      return {
        loading: false,
      };
    },
  },
});

export const { actions, reducer, name: sliceKey } = apiProcessSlice;
