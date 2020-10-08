import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../services/api';
import actions from '../actionTypes';

export default function* scform(action) {
  try {
    const api = `sc/${action.id}`;
    const response = yield call(callFetchApi, api, {}, 'POST', action.payload);
    if (response) {
      if (response.status == 201) {
        yield put({
          type: actions.ORDER_UPLOAD_SUCCESS,
          response: response.data
        });
        yield put({
          type: actions.FORM_STEP_UPDATE,
          response: -2
        });
      } else {
        yield put({
          type: actions.ORDER_UPLOAD_FAILURE,
          error: 'Error with form'
        });
        // yield put({
        //   type: actions.FORM_STEP_UPDATE,
        //   response: -2
        // });
      }
    }
  } catch (error) {
    yield put({
      type: actions.ORDER_UPLOAD_FAILURE,
      error: error
    });
    // yield put({
    //   type: actions.FORM_STEP_UPDATE,
    //   response: -2
    // });
  }
}
