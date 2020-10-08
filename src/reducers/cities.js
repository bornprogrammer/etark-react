import actions from '../actionTypes';

const defaultState = {
  cityName: {},
  gotCity: false
};

const cities = (state = defaultState, action) => {
  switch (action.type) {
    case actions.GET_CITY_SUCCESS:
      return {
        ...state,
        cityName: action.response,
        gotCity: true
      };
    default:
      return state;
  }
};

export default cities;
