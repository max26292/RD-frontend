import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.declarationTypeOfFinancialPaper || initialState;

export const selectDeclarationTypeOfFinancialPaper = createSelector(
  [selectDomain],
  declarationTypeOfFinancialPaperState => declarationTypeOfFinancialPaperState,
);
