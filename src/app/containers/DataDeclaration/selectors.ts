import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.dataDeclaration || initialState;

export const selectDataDeclaration = createSelector(
  [selectDomain],
  dataDeclarationState => dataDeclarationState,
);
