import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../services/api';
import actions from '../actionTypes';

export default function* orderstate(action) {
  try {
    const api = `sc/activity/${action.payload.pickupid}/${action.payload.activity}`;
    const response = yield call(callFetchApi, api, {}, 'PATCH', {});
    console.log(response);
    if (response.status === 200) {
      yield put({
        type: actions.ORDER_STATE_UPDATED
      });
    }
  } catch (error) {}
  yield put({
    type: actions.ORDER_STATE_UPDATED
  });
}
