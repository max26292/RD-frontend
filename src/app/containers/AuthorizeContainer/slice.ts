import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the AuthorizeContainer container
export const initialState: ContainerState = {
  user: '',
  registrationError: false,
  loading: false,
};

const authorizeContainerSlice = createSlice({
  name: 'authorizeContainer',
  initialState,
  reducers: {
    register(state, action: PayloadAction<any>) {
      state.registrationError = !state.registrationError;
    },
  },
});

export const { actions, reducer, name: sliceKey } = authorizeContainerSlice;
