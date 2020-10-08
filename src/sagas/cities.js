import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../services/api';
import actions from '../actionTypes';

export default function* cities() {
  try {
    const api = 'masters/cities';
    const response = yield call(callFetchApi, api, {}, 'GET', {});
    if (response.status === 200) {
      yield put({
        type: actions.GET_CITY_SUCCESS,
        response: response.data.result
      });
    }
  } catch (error) {}
}
