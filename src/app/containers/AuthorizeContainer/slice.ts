import { PayloadAction } from '@reduxjs/toolkit';
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
    register(state, action: PayloadAction<any>) {
      state.registrationError = !state.registrationError;
    },
    isLoading(state){
      return {
        ...state,
        loading :true
      }
    },
    isLoaded(state){
      return {
        ...state,
        loading :false
      }
    },

    loginSuccess(state, action: PayloadAction<IAuthorization>) {
      const { payload } = action;
      return {
        ...state,
        userId: payload.userId,
        username: payload.username,
        token: payload.token,
      };
    },
    loginFailed(state, action: PayloadAction<IAuthorization>) {
      return {
        ...state,
        userId: false,
        username: false,
        token: false,
      };
    },
    login(state,action: PayloadAction<IapiRequest<any>>){
      state.loading= true;
      // return action.payload;
    },  
    logout(state, action: PayloadAction<IAuthorization>) {
      return {
        ...state,
        userId: false,
        username: false,
        token: false,
      };
    },
  },
});

export const { actions, reducer, name: sliceKey } = authorizeContainerSlice;
