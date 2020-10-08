import actions from '../actionTypes';

const defaultState = {
  onlinestr: {},
  gotOn: false
};

const onlinestr = (state = defaultState, action) => {
  switch (action.type) {
    case actions.GET_STORE_ONLINE_SUCESS:
      return {
        ...state,
        onlinestr: action.response,
        gotOn: true
      };
    default:
      return state;
  }
};

export default onlinestr;
