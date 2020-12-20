/* eslint-disable prettier/prettier */
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.initialDeclaration || initialState;

export const selectInitialDeclaration = createSelector(
  [selectDomain],
  initialDeclarationState => initialDeclarationState,
);
