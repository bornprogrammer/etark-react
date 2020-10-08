import actions from '../actionTypes';

const defaultState = {
  uploadStatus: '',
  failure: false
};

const orderupload = (state = defaultState, action) => {
  switch (action.type) {
    case actions.ORDER_UPLOAD_SUCCESS:
      return {
        ...state,
        uploadStatus: 'true'
      };
    case actions.ORDER_UPLOAD_FAILURE:
      return {
        ...state,
        uploadStatus: 'false',
        failure: true
      };
    default:
      return state;
  }
};

export default orderupload;
