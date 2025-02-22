import { takeLatest } from 'redux-saga/effects';
import actions from '../actionTypes';

import signupUser from './signupUser';
import signinUser from './signinUser';
import signout from './signout';
import formstep from './formstep';
import complaint from './complaint';
import brands from './brands';
import offlineStr from './offlineStr';
import onlineStr from './onlineStr';
import plan from './plan';
import cities from './cities';
import compUpdate from './comp_update';
import planupdate from './planupdate';
import scdevice from './scdevice';
import scform from './scformupload';
import orderstatus from './orderstatus';
import signinSc from './signinsc';
import signinRp from './signinrp';
import orderdispatch from './orderdispatch';
import closeorder from './closeorder';
import openorder from './openorder';
import orderstate from './orderstate';
import search from './search';

export default function* saga() {
  yield takeLatest(actions.FORM_STEP, formstep);
  yield takeLatest(actions.SIGNUP_USER, signupUser);
  yield takeLatest(actions.SIGNIN_USER, signinUser);
  yield takeLatest(actions.SIGNOUT, signout);
  yield takeLatest(actions.COMPLAINT_UPLOAD, complaint);
  yield takeLatest(actions.COMPLAINT_UPDATE, compUpdate);
  yield takeLatest(actions.GET_BRANDS, brands);
  yield takeLatest(actions.GET_STORE_OFFLINE, offlineStr);
  yield takeLatest(actions.GET_STORE_ONLINE, onlineStr);
  yield takeLatest(actions.PLAN_SUBMIT, plan);
  yield takeLatest(actions.PLAN_UPDATE, planupdate);
  yield takeLatest(actions.GET_CITY, cities);
  yield takeLatest(actions.ORDER_UPDATE, scdevice);
  yield takeLatest(actions.ORDER_UPLOAD, scform);
  yield takeLatest(actions.ORDER_STATUS_UPDATE, orderstatus);
  yield takeLatest(actions.SIGNIN_SC, signinSc);
  yield takeLatest(actions.SIGNIN_RP, signinRp);
  yield takeLatest(actions.ORDER_DISPATCH_UPDATE, orderdispatch);
  yield takeLatest(actions.ORDER_DETAIL_CLOSE, closeorder);
  yield takeLatest(actions.ORDER_DETAIL_OPEN, openorder);
  yield takeLatest(actions.ORDER_STATE_UPDATE, orderstate);
  yield takeLatest(actions.ORDER_SEARCH, search);
}
