import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../services/api';
import actions from '../actionTypes';

export default function* signinRp(action) {
  try {
    console.log(action.payload);
    const api = 'retailer/login';
    const response = yield call(callFetchApi, api, {}, 'POST', action.payload);
    console.log(response);
    if (response.status === 201) {
      localStorage.setItem('rpdata', JSON.stringify(response.data.result));
      yield put({
        type: actions.SIGNIN_RP_SUCCESS,
        response: response.data
      });
    } else {
      yield put({
        type: actions.SIGNIN_RP_FAILURE,
        error: 'Error with login'
      });
    }
  } catch (error) {
    yield put({
      type: actions.SIGNIN_RP_FAILURE,
      error: 'Error with login'
    });
  }
}
