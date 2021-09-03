import { all, spawn, call } from 'redux-saga/effects';
import { getRequireContextSlices, getAllModuleSagas } from '@src/shared/store';

function* rootSaga() {
  // @ts-ignore
  const sagas = yield all(getAllModuleSagas(getRequireContextSlices()));
  /*
   * Keeping the root alive
   * ref: https://redux-saga.js.org/docs/advanced/RootSaga.html
   */
  const decentralizedSagas = sagas.map((saga: FixMeAny) =>
    // eslint-disable-next-line func-names
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e, 'Saga crash detected');
        }
      }
    }),
  );
  yield all(decentralizedSagas);
}
export default rootSaga;
