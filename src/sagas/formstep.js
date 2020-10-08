import { put } from 'redux-saga/effects';
import actions from '../actionTypes';

export default function* formstep(action) {
  yield put({
    type: actions.FORM_STEP_UPDATE,
    response: action.payload
  });
}
