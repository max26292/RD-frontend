import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the GeneratedVouchers container
export const initialState: ContainerState = {};

const generatedVouchersSlice = createSlice({
  name: 'generatedVouchers',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = generatedVouchersSlice;
