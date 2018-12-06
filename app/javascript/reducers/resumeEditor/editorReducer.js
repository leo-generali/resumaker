import {
  UPDATE_BASIC_INFO_FORM,
  FETCH_RESUME_DATA_BEGIN,
  FETCH_RESUME_DATA_SUCCESS,
  FETCH_RESUME_DATA_FAILURE
} from '../../actions/resumeEditor/types';

const initialState = {
  isLoaded: false,
  resumeData: {}
};

export default function editorReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESUME_DATA_BEGIN:
      return {
        ...state
      };
    case FETCH_RESUME_DATA_SUCCESS:
      return {
        ...state,
        resumeData: action.payload,
        isLoaded: true
      };
    case UPDATE_BASIC_INFO_FORM:
      return {
        ...state,
        resumeData: action.payload
      };
    default:
      return state;
  }
}
