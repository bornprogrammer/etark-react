import actions from '../actionTypes';

const defaultState = {
  offlinestr: {},
  gotOff: false
};

const offlinestr = (state = defaultState, action) => {
  switch (action.type) {
    case actions.GET_STORE_OFFLINE_SUCESS:
      return {
        ...state,
        offlinestr: action.response,
        gotOff: true
      };
    default:
      return state;
  }
};

export default offlinestr;
