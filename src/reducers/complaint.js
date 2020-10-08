import actions from '../actionTypes';

const defaultState = {
  isUploaded: false,
  uploadError: '',
  complaintid: ''
};

const complaint = (state = defaultState, action) => {
  switch (action.type) {
    case actions.COMPLAINT_UPLOAD_SUCCESS:
      return {
        ...state,
        isUploaded: true,
        complaintid: action.response.result.id
      };
    case actions.COMPLAINT_UPLOAD_FAILURE:
      return {
        ...state,
        uploadError: action.error
      };
    default:
      return state;
  }
};

export default complaint;
