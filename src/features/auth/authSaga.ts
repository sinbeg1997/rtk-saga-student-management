import { PayloadAction } from '@reduxjs/toolkit';
import { take, fork, delay, call, put } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    console.log('Handle login', payload);
    // Call API login
    yield delay(1000);
    localStorage.setItem('access_token', 'fake token ');
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'Easy Frontend',
      })
    );
  } catch (error) {
    // yield put(authActions.loginFailed(error.message));
  }
  // redirect to admin page
}

function* handleLogout() {
  yield delay(500);
  console.log('Handle logout');
  localStorage.removeItem('access_token');
  // redirect to login page
}

function* watchLoginFlow() {
  while (true) {
    // Check user login or not
    const isLoggedIn = localStorage.getItem('access_token');

    if (!isLoggedIn) {
      console.log('Watch Login');
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
