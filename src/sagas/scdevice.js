import { put } from 'redux-saga/effects';
import actions from '../actionTypes';

export default function* device(action) {
  yield put({
    type: actions.ORDER_UPDATE_SUCESS,
    response: action.payload
  });
  yield put({
    type: actions.FORM_STEP_UPDATE,
    response: 2
  });
}
