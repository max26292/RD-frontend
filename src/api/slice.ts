import { PayloadAction } from '@reduxjs/toolkit';
import { Action } from 'history';
import { IapiRequest } from 'types/apiType';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { initRequestState, ResponseType } from './types';
import { history } from 'store/configureStore';

export const initialState: initRequestState = {
  loading: false,
};

const apiProcessSlice = createSlice({
  name: 'request',
  initialState: initialState,
  reducers: {
    makeRequest<T, RT>(state, action: PayloadAction<IapiRequest<T>>) {
      state.loading = true;
    },
    isLoading(state,action: PayloadAction<any>){
      return {
        ...state,
        loading : true
      };
    },
    isLoaded(state,action: PayloadAction<any>){
      return {
        ...state,
        loading : false
      };
    },
    requestSucess<T>(state, action: PayloadAction<ResponseType<T>>) {
      return {
        ...state,
        loading: false,
      };
    },
    requestFailed(state, action: PayloadAction<ResponseType>) {
      const { payload } = action;
      console.error({payload});
      return {
        ...state,
        loading: false,
        message:payload.message       
      };
    },
  },
});

export const { actions, reducer, name: sliceKey } = apiProcessSlice;
