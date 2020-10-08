import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../services/api';
import actions from '../actionTypes';

export default function* offlineStr(action) {
  try {
    const api = 'masters/merchants/online';
    const response = yield call(callFetchApi, api, {}, 'GET', {});

    if (response.status === 200) {
      yield put({
        type: actions.GET_STORE_ONLINE_SUCESS,
        response: response.data.result
      });
    }
  } catch (error) {}
}
