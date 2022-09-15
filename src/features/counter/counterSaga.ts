import { PayloadAction } from '@reduxjs/toolkit';
import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

// export function* log(action: PayloadAction) {
//   console.log('Log', action);
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting 2s');
  // wait 2s
  yield delay(2000);
  console.log('Waiting done, dispatch action');
  // Dispatch action success
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('Hello counter Saga');

  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
  //   yield takeLatest(incrementSaga.toString(), handleIncreamentSaga);
}
