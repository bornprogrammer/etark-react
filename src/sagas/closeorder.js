import { put } from 'redux-saga/effects';
import actions from '../actionTypes';

export default function* closeorder(action) {
  yield put({
    type: actions.ORDER_DETAIL_CLOSED
  });
}
