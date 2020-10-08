import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../services/api';
import actions from '../actionTypes';

export default function* brands(action) {
  try {
    const api = 'masters/categories/1/makers';
    const response = yield call(callFetchApi, api, {}, 'GET', {});
    if (response.status === 200) {
      yield put({
        type: actions.GET_BRANDS_SUCCESS,
        response: response.data.result
      });
    }
  } catch (error) {}
}
