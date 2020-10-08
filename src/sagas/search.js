import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../services/api';
import actions from '../actionTypes';

export default function* search(action) {
  yield put({
    type: actions.ORDER_STATE_UPDATED
  });
}
