import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.declarationListOfWork || initialState;

export const selectDeclarationListOfWork = createSelector(
  [selectDomain],
  declarationListOfWorkState => declarationListOfWorkState,
);
