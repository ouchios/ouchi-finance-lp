import createSagaMiddleware from 'redux-saga';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { getAllSlices, getRequireContextSlices } from '@src/shared/store';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import rootSaga from '@src/store/sagas';

const allSlices = getAllSlices(getRequireContextSlices());
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  ...allSlices,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    sagaMiddleware,
  ],
  devTools: true,
});
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
