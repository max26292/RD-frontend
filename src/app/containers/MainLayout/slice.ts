import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the MainLayout container
export const initialState: ContainerState = {
  loading:false
};

export interface Responded {
  loading:false
}

const mainLayoutSlice = createSlice({
  name: 'mainLayout',
  initialState,
  reducers: {
    isLoading(state: ContainerState, action: PayloadAction<any>) {
      state.loading = true
    },
    isLoaded(state, action: PayloadAction<any>) {
      state.loading = false
    },
  },
});

export const { actions, reducer, name: sliceKey } = mainLayoutSlice;
