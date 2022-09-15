import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

function* helloSaga() {
  console.log('Hello Saga');
}

export default function* rootSaga() {
  console.log('Root Saga');
  // Run all smaller saga such as helloSaga, counterSaga
  yield all([helloSaga(), counterSaga()]);
}
