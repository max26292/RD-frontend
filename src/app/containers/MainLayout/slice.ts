import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the MainLayout container
export const initialState: ContainerState = {
  loading: false,
};

export interface Responded {
  loading: false;
}

const mainLayoutSlice = createSlice({
  name: 'mainLayout',
  initialState,
  reducers: {
    setData(state: ContainerState, action: PayloadAction<any>) {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export const { actions, reducer, name: sliceKey } = mainLayoutSlice;
