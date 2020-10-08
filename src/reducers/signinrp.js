import actions from '../actionTypes';

const defaultState = {
  isLoggedIn: false,
  signinError: '',
  response: {}
};

const rpSignin = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SIGNIN_RP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        response: action.response
      };
    case actions.RP_SIGNOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        response: {}
      };
    case actions.SIGNIN_RP_FAILURE:
      return {
        ...state,
        signinError: action.error
      };
    // case actions.CLEAR_SIGNIN_ERROR:
    //   return {
    //     ...state,
    //     signinError: ''
    //   };
    default:
      return state;
  }
};

export default rpSignin;
