import { authSaga } from 'features/auth/authSaga';
import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  console.log('Root Saga');
  // Run all smaller saga such as helloSaga, counterSaga
  yield all([authSaga()]);
}
