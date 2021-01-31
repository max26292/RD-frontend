import { PayloadAction } from '@reduxjs/toolkit';
import { ResponseType } from 'api/types';
import { IAuthorization } from 'types';
import { IapiRequest } from 'types/apiType';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, IloginBody } from './types';

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
      return {
        ...state,
        auth: data,
      };
    },
    clearLoginInfo(state, action: PayloadAction<ContainerState>) {
      state.registrationError = !state.registrationError;
    },
  },
});

export const { actions, reducer, name: sliceKey } = authorizeContainerSlice;
