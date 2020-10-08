import { combineReducers } from 'redux';
import signup from './signup';
import signin from './signinUser';
import formstep from './formstep';
import complaint from './complaint';
import brands from './brand';
import offlineStr from './offlineStr';
import onlineStr from './onlineStr';
import cities from './cities';
import plan from './plan';
import serviceform from './serviceform';
import orderstatus from './orderstatus';
import scSignin from './signinsc';
import rpSignin from './signinrp';
import orderupload from './orderupload';

const reducers = combineReducers({
  signup,
  signin,
  formstep,
  complaint,
  brands,
  offlineStr,
  onlineStr,
  orderupload,
  cities,
  plan,
  serviceform,
  orderstatus,
  scSignin,
  rpSignin
});

export default reducers;
