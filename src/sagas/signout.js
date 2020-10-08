import { put } from 'redux-saga/effects';
import actions from '../actionTypes';

export default function* signout(action) {
  localStorage.removeItem('userdata');
  yield put({
    type: actions.SIGNOUT_SUCCESS,
    response: ''
  });
}
