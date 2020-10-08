import actions from '../actionTypes';

const defaultState = {
  isLoggedIn: false,
  signinError: '',
  response: {}
};

const signin = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SIGNIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        response: action.response
      };
    case actions.SIGNOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        response: {},
        signinError: ''
      };
    case actions.SIGNIN_USER_FAILURE:
      return {
        ...state,
        signinError: action.error
      };
    case actions.CLEAR_SIGNIN_ERROR:
      return {
        ...state,
        signinError: ''
      };
    default:
      return state;
  }
};

export default signin;
