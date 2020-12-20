import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the InitialDeclaration container
export const initialState: ContainerState = {};

const initialDeclarationSlice = createSlice({
  name: 'initialDeclaration',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = initialDeclarationSlice;
