import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.declarationListOfAccounts || initialState;

export const selectDeclarationListOfAccounts = createSelector(
  [selectDomain],
  declarationListOfAccountsState => declarationListOfAccountsState,
);
