import { put } from 'redux-saga/effects';
import actions from '../actionTypes';

export default function* openorder(action) {
  yield put({
    type: actions.ORDER_DETAIL_OPENED,
    response: action.payload
  });
}
