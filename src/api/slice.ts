import { PayloadAction } from "@reduxjs/toolkit";
import { IapiRequest } from "types/apiType";
import { createSlice } from "utils/@reduxjs/toolkit";
import { initRequestState, ResponseFail, ResponseSuccess } from "./types";

const initialState : initRequestState = {
    loading:false
}

const apiProcessSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    makeRequest<T,ResponseType>(state, action: PayloadAction<IapiRequest<T>>) {
      state.loading = true;
    },
    requestSucess<T>(state, action: PayloadAction<ResponseSuccess<T>>) {
      // state.loading = false;
      const {payload} = action;
      return {
        ...state,
        loading :false,
        ...payload
      }
    },
    requestFailed(state, action: PayloadAction<ResponseFail>) {
      const {payload} = action;
      return {
        loading :false,
        ...payload
      }
    },
  },
});

export const { actions, reducer, name: sliceKey } = apiProcessSlice;