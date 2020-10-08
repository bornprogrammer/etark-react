import actions from '../actionTypes';

const defaultState = {
  step: 1
};

const formstep = (state = defaultState, action) => {
  switch (action.type) {
    case actions.FORM_STEP_UPDATE:
      return {
        ...state,
        step: state.step + action.response
      };
    default:
      return state;
  }
};

export default formstep;
