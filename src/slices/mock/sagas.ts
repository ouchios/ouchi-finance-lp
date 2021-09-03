import { call, put, takeLatest } from 'redux-saga/effects';
import { actions, requestType } from '@src/slices/mock';
import axios from 'axios';

const fetchUsers = () =>
  axios.get('https://jsonplaceholder.typicode.com/users');

export function* bannedUsers() {
  try {
    // @ts-ignore
    const response = yield call(fetchUsers);
    yield put(actions.success({ response }));
  } catch (e) {
    yield put(actions.failure());
  }
}

export default function* () {
  yield takeLatest(requestType, bannedUsers);
}
