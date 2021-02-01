import { PayloadAction } from '@reduxjs/toolkit';
import { ResponseType } from 'api/types';
import localforage from 'localforage';
import { isEmpty } from 'lodash';
import { REHYDRATE } from 'redux-persist';
import { IAuthorization } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, Irestore } from './types';
// The initial state of the AuthorizeContainer container
export const initialState: ContainerState = {
  auth: {
    userId: 0,
    username: '',
    token: '',
  },
  user: '',
  registrationError: false,
  loading: false,
};

const authorizeContainerSlice = createSlice({
  name: 'authorizeContainer',
  initialState,
  reducers: {
    setLoginInfo(state, action: PayloadAction<ResponseType<IAuthorization>>) {
      const { payload } = action;
      const data: IAuthorization = <IAuthorization>payload.data;
      localforage.setItem('auth', data);
      return {
        ...state,
        auth: data,
      };
    },
    updateExistsAuth(state, action: PayloadAction<ResponseType<IAuthorization>>) {
      const { payload } = action;
      const data: IAuthorization = <IAuthorization>payload.data;
      console.table({data});
      return {
        ...state,
      };
    },
    restoreAuthInfo(state,action: PayloadAction<Irestore>) {
      return {
        ...state,
      };
    },
    clearLoginInfo(state, action: PayloadAction<ContainerState>) {
      localforage.removeItem('auth');
      return {
        ...state,
        initialState,
      };
    },
  },  
});

export const { actions, reducer, name: sliceKey } = authorizeContainerSlice;
