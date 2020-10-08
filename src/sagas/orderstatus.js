import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../services/api';
import actions from '../actionTypes';

export default function* orderstatus(action) {
  yield put({
    type: actions.ORDER_STATUS_UPDATED,
    response: action.payload
  });
}
