import actions from '../actionTypes';

const defaultState = {
  status: 'allocated',
  readyDispatch: false,
  orderDetail: false,
  orderno: '',
  imeino: '--',
  model: '--',
  brand: '--',
  warranty: '--',
  bop: '',
  compdetail: '--',
  pickupid: '',
  statuschange: false,
  userdetails: '',
  useraddress: '',
  bankdetails: ''
};

const orders = (state = defaultState, action) => {
  switch (action.type) {
    case actions.ORDER_STATE_UPDATED:
      return {
        ...state,
        statuschange: !state.statuschange
      };
    case actions.ORDER_STATUS_UPDATED:
      return {
        ...state,
        status: action.response,
        statuschange: !state.statuschange
      };
    case actions.ORDER_DETAIL_OPENED:
      console.log(action.response);
      return {
        ...state,
        orderDetail: true,
        orderno: action.response.orderno,
        imeino: action.response.imeino,
        model: action.response.model,
        brand: action.response.brand,
        bop: action.response.bop,
        warranty: action.response.warranty,
        compdetail: action.response.compdetail,
        pickupid: action.response.pickupid,
        userdetails: action.response.userdetails,
        useraddress: action.response.useraddress,
        bankdetails: action.response.bankdetails
      };
    case actions.ORDER_DETAIL_CLOSED:
      return {
        ...state,
        orderDetail: false
      };
    case actions.ORDER_DISPATCH_UPDATED:
      return {
        ...state,
        readyDispatch: action.response.dispatch,
        orderno: action.response.orderno,
        imeino: action.response.imeino,
        model: action.response.model,
        brand: action.response.brand,
        warranty: action.response.warranty,
        compdetail: action.response.compdetail,
        pickupid: action.response.pickupid,
        statuschange: !state.statuschange,
        bankdetails: action.response.bankdetails
      };
    default:
      return state;
  }
};

export default orders;
