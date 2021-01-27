import { PayloadAction } from "@reduxjs/toolkit";
import { IapiRequest } from "types/apiType";
import { createSlice } from "utils/@reduxjs/toolkit";
import { initRequestState, ResponseType } from "./types";

const initialState : initRequestState = {
    loading:false
}

const apiProcessSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    makeRequest(state, action: PayloadAction<IapiRequest<any>>) {
      state.loading = true;
    },
    requestSucess<T>(state:T, action: PayloadAction<ResponseType>) {
      // state.loading = false;
    },
    requestFailed(state, action: PayloadAction<ResponseType>) {
      state.loading = false;
      const {payload:{error,message}} = action;
      if(error){
        state.error = error
      }
      if(message){
          state.message = message
      }
    },
  },
});

export const { actions, reducer, name: sliceKey } = apiProcessSlice;