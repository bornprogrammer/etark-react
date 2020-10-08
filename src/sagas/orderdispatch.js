import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../services/api';
import actions from '../actionTypes';

export default function* orderdispatch(action) {
  yield put({
    type: actions.ORDER_DISPATCH_UPDATED,
    response: action.payload
  });
}
