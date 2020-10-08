import actions from '../actionTypes';

const defaultState = {
  imei: '',
  invoiceno: '',
  front: '',
  back: '',
  uploaderror: ''
};

const serviceform = (state = defaultState, action) => {
  switch (action.type) {
    case actions.ORDER_UPDATE_SUCESS:
      return {
        ...state,
        imei: action.response.imei,
        invoiceno: action.response.invoice,
        front: action.response.front,
        back: action.response.back,
        uploaderror: ''
      };
    case actions.ORDER_UPDATE_FAILURE:
      return {
        ...state,
        uploaderror: action.error
      };
    default:
      return state;
  }
};

export default serviceform;
