import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../services/api';
import actions from '../actionTypes';

export default function* signinUser(action) {
  try {
    const api = 'auth/login';
    const response = yield call(callFetchApi, api, {}, 'POST', action.payload);

    if (response.status === 201) {
      delete response.data.result['password']
      localStorage.setItem('userdata', JSON.stringify(response.data.result));
      yield put({
        type: actions.SIGNIN_USER_SUCCESS,
        response: response.data
      });
    } else {
      yield put({
        type: actions.SIGNIN_USER_FAILURE,
        error: 'Error with login'
      });
    }
  } catch (error) {
    yield put({
      type: actions.SIGNIN_USER_FAILURE,
      error: 'Error with login'
    });
  }
}
