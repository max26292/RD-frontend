import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.generatedVouchers || initialState;

export const selectGeneratedVouchers = createSelector(
  [selectDomain],
  generatedVouchersState => generatedVouchersState,
);
