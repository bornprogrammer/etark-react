import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../services/api';
import actions from '../actionTypes';

export default function* complaint(action) {
  try {
    const api = `user-plan/${action.id}`;
    const response = yield call(callFetchApi, api, {}, 'PUT', action.payload);
    if (response.status === 201) {
      yield put({
        type: actions.PLAN_UPDATE_SUCCESS,
        response: action.planid
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
    console.log(error);
    yield put({
      type: actions.PLAN_SUBMIT_FAILURE,
      error: error
    });
  }
}
