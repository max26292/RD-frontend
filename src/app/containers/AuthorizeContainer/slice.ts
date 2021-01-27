import { PayloadAction } from '@reduxjs/toolkit';
import { ResponseSuccess } from 'api/types';
import { IAuthorization } from 'types';
import { IapiRequest } from 'types/apiType';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, IloginBody } from './types';

// The initial state of the AuthorizeContainer container
export const initialState: ContainerState = {
  auth: {
    userId:false,
    username:false,
    token:false
  },
  user:'',
  registrationError: false,
  loading: false,
};

const authorizeContainerSlice = createSlice({
  name: 'authorizeContainer',
  initialState,
  reducers: {
    setLoginInfo(state, action: PayloadAction<ResponseSuccess>) {
      const {payload} = action;
      const data :IAuthorization = payload.data;
      console.debug({data});
      return {
        ...state,
        auth:{
          token:data.token, 
          userId: data.userId         
        },
      }
    },
    clearLoginInfo(state, action: PayloadAction<ContainerState>) {
      state.registrationError = !state.registrationError;
    },
  }
});

export const { actions, reducer, name: sliceKey } = authorizeContainerSlice;
