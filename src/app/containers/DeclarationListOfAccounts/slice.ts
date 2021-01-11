import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the DeclarationListOfAccounts container
export const initialState: ContainerState = {};

const declarationListOfAccountsSlice = createSlice({
  name: 'declarationListOfAccounts',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const {
  actions,
  reducer,
  name: sliceKey,
} = declarationListOfAccountsSlice;
