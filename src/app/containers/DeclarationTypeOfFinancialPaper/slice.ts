import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the DeclarationTypeOfFinancialPaper container
export const initialState: ContainerState = {};

const declarationTypeOfFinancialPaperSlice = createSlice({
  name: 'declarationTypeOfFinancialPaper',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const {
  actions,
  reducer,
  name: sliceKey,
} = declarationTypeOfFinancialPaperSlice;
