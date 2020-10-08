import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../services/api';
import actions from '../actionTypes';

export default function* complaint(action) {
  try {
    const api = 'user-plan';
    const response = yield call(callFetchApi, api, {}, 'POST', action.payload);
    if (response.status === 201) {
      yield put({
        type: actions.PLAN_SUBMIT_SUCCESS,
        response: response.data
      });
      yield put({
        type: actions.FORM_STEP_UPDATE,
        response: 1
      });
    } else {
      yield put({
        type: actions.PLAN_SUBMIT_FAILURE,
        error: 'Error with form'
      });
    }
  } catch (error) {
    yield put({
      type: actions.PLAN_SUBMIT_FAILURE,
      error: error
    });
  }
}
