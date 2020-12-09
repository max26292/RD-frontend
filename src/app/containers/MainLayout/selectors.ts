import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.mainLayout || initialState;

export const selectMainLayout = createSelector(
  [selectDomain],
  mainLayoutState => mainLayoutState,
);
