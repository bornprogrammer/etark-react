import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../services/api';
import actions from '../actionTypes';

export default function* complaint(action) {
  try {
    const api = 'complaints';
    const response = yield call(callFetchApi, api, {}, 'POST', action.payload);
    if (response.status === 201) {
      yield put({
        type: actions.COMPLAINT_UPLOAD_SUCCESS,
        response: response.data
      });
      yield put({
        type: actions.FORM_STEP_UPDATE,
        response: 1
      });
    } else {
      yield put({
        type: actions.COMPLAINT_UPLOAD_FAILURE,
        error: 'Error with form'
      });
    }
  } catch (error) {
    yield put({
      type: actions.COMPLAINT_UPLOAD_FAILURE,
      error
    });
  }
}
