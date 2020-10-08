import actions from '../actionTypes';

const defaultState = {
  signupSuccess: false,
  loginError: ""
}

const signup = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        signupSuccess: true
      }
    case actions.SIGNUP_USER_FAILURE:
      return {
        ...state,
        loginError: action.error
      }
    case actions.CLEAR_SIGNUP_ERROR:
      return {
        ...state,
        loginError: ""
      }
    default:
      return state;
  }
}

export default signup;