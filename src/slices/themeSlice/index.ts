import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import * as selectors from '@src/slices/themeSlice/selectors';

export enum ThemesEnum {
  Main = 'main',
  Dark = 'dark',
}

export type State = {
  currentTheme: ThemesEnum;
};
const initialState: State = {
  currentTheme: ThemesEnum.Main,
};

const moduleName = 'theme';

const themeSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemesEnum>) => {
      switch (action.payload) {
        case 'main':
          return {
            currentTheme: ThemesEnum.Main,
          };
        case 'dark':
          return {
            currentTheme: ThemesEnum.Dark,
          };
        default:
          return state;
      }
    },
  },
});

const { actions } = themeSlice;

const persistConfig = {
  key: moduleName,
  storage,
};

const reducer = persistReducer(persistConfig, themeSlice.reducer);

export { moduleName, actions, reducer, selectors };
