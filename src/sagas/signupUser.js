import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../services/api';
import actions from '../actionTypes';

export default function* signupUser(action) {
  try {
    const api = 'auth';
    const response = yield call(callFetchApi, api, {}, 'POST', action.payload);
    console.log(response)
    if (response.status === 201) {
      yield put({
        type: actions.SIGNUP_USER_SUCCESS,
        response: response.data
      });
    } else {
      yield put({
        type: actions.SIGNUP_USER_FAILURE,
        error: 'User already exists'
      });
    }
  } catch (error) {
    yield put({
      type: actions.SIGNUP_USER_FAILURE,
      error
    });
  }
}
