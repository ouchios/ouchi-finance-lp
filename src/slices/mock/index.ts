import { createSlice } from '@reduxjs/toolkit';
import * as selectors from '@src/slices/mock/selectors';
import { Reducer } from '@src/slices/mock/types';
import * as saga from '@src/slices/mock/sagas';

export type State = Reducer;

const initialState = {
  status: 'initial',
  data: [],
};

const moduleName = 'mock';

const mockSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    request: () => ({
      ...initialState,
      status: 'pending',
    }),
    success: (state, action) => ({
      ...state,
      data: action.payload.response.data,
      status: 'success',
    }),
    failure: (state) => ({
      ...state,
      status: 'failure',
    }),
  },
});

const { actions, reducer } = mockSlice;

export const requestType = actions.request.type;

export { moduleName, actions, reducer, selectors, saga };
