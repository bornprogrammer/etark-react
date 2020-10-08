import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../services/api';
import actions from '../actionTypes';

export default function* signinSc(action) {
  try {
    const api = 'sc/auth/login';
    const response = yield call(callFetchApi, api, {}, 'POST', action.payload);

    if (response.status === 201) {
      localStorage.setItem('scdata', JSON.stringify(response.data.result));
      yield put({
        type: actions.SIGNIN_SC_SUCCESS,
        response: response.data
      });
    } else {
      yield put({
        type: actions.SIGNIN_SC_FAILURE,
        error: 'Error with login'
      });
    }
  } catch (error) {
    yield put({
      type: actions.SIGNIN_SC_FAILURE,
      error: 'Error with login'
    });
  }
}
