import { put } from 'redux-saga/effects';
import actions from '../actionTypes';

export default function* clearSignupError(){
  while(true){
    yield put({
      type: actions.CLEAR_SIGNUP_ERROR
    })
  }
}