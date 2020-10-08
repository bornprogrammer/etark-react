import actions from '../actionTypes';

const defaultState = {
  planid: '',
  uploadError: '',
  userplanid: ''
};

const plan = (state = defaultState, action) => {
  switch (action.type) {
    case actions.PLAN_SUBMIT_SUCCESS:
      return {
        ...state,
        planid: action.response.result.plan_id,
        userplanid: action.response.result.id
      };
    case actions.PLAN_UPDATE_SUCCESS:
      return {
        ...state,
        planid: action.response
      };
    case actions.PLAN_SUBMIT_FAILURE:
      return {
        ...state,
        uploadError: action.error
      };
    default:
      return state;
  }
};

export default plan;
