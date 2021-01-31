import { createSelector } from '@reduxjs/toolkit';

import { IAuthorization, RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.authorizeContainer || initialState;

export const selectAuthorizeContainer = createSelector(
  [selectDomain],
  authorizeContainerState => authorizeContainerState,
);
export const selectAuthInfo = createSelector(
  [selectDomain],
  authorizeContainerState => authorizeContainerState.auth as IAuthorization,
);
