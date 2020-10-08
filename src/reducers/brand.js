import actions from '../actionTypes';

const defaultState = {
  brands: {},
  gotBrands: false
};

const brand = (state = defaultState, action) => {
  switch (action.type) {
    case actions.GET_BRANDS_SUCCESS:
      return {
        ...state,
        brands: action.response,
        gotBrands: true
      };
    default:
      return state;
  }
};

export default brand;
