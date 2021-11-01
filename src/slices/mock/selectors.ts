import { State, moduleName } from '@src/slices/mock';
import { createSelector } from '@reduxjs/toolkit';

export const selectMock = createSelector<FixMeAny[], State>(
  (state) => state[moduleName],
  (data) => data,
);
