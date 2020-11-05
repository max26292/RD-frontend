import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.authorizeContainer || initialState;

export const selectAuthorizeContainer = createSelector(
  [selectDomain],
  authorizeContainerState => authorizeContainerState,
);
