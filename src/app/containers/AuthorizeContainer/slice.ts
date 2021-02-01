import { PayloadAction } from '@reduxjs/toolkit';
import { ResponseType } from 'api/types';
import localforage from 'localforage';
import { isEmpty } from 'lodash';
import { REHYDRATE } from 'redux-persist';
import { IAuthorization } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
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
    clearLoginInfo(state, action: PayloadAction<ContainerState>) {
      localforage.removeItem('auth');
      return {
        ...state,
        initialState
      }
    }
  },
  extraReducers: {
    [REHYDRATE]: (state, actions: PayloadAction<ResponseType<IAuthorization>>) => {
      const { auth } = state;
      let newState :IAuthorization={}; 
      let processReadData :Promise<IAuthorization> = localforage.getItem<IAuthorization>('auth');
      processReadData.then((value:IAuthorization)=>{
        console.debug(value);
        return state =  {
          ...state,
          auth:value
        }
      }).catch((err)=>{
        console.debug(err);
      })
        

    }
  }
});

export const { actions, reducer, name: sliceKey } = authorizeContainerSlice;
