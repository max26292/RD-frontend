import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.listWarehouse || initialState;

export const selectListWarehouse = createSelector(
  [selectDomain],
  listWarehouseState => listWarehouseState,
);
