import { State, moduleName } from '@src/slices/themeSlice';
import { createSelector } from '@reduxjs/toolkit';

export const selectTheme = createSelector<FixMeAny[], State>(
  (state) => state[moduleName],
  (data) => data,
);
