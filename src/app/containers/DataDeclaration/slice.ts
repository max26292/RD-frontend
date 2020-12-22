import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the DataDeclaration container
export const initialState: ContainerState = {};

const dataDeclarationSlice = createSlice({
  name: 'dataDeclaration',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = dataDeclarationSlice;
