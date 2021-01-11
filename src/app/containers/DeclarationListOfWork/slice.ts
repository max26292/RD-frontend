import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the DeclarationListOfWork container
export const initialState: ContainerState = {};

const declarationListOfWorkSlice = createSlice({
  name: 'declarationListOfWork',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = declarationListOfWorkSlice;
