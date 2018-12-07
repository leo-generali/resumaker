import {
  FETCH_RESUME_DATA_BEGIN,
  FETCH_RESUME_DATA_SUCCESS,
  FETCH_RESUME_DATA_FAILURE,
  UPDATE_RESUME_FORM_INPUT,
  ADD_SKILL,
  REMOVE_SKILL,
  ADD_SKILL_CATEGORY,
  REMOVE_SKILL_CATEGORY
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
    case UPDATE_RESUME_FORM_INPUT:
      return {
        ...state,
        resumeData: action.payload
      };
    case ADD_SKILL:
      return {
        ...state,
        resumeData: action.payload
      };
    case REMOVE_SKILL:
      return {
        ...state,
        resumeData: action.payload
      };
    case ADD_SKILL_CATEGORY:
      return {
        ...state,
        resumeData: action.payload
      };
    case REMOVE_SKILL_CATEGORY:
      return {
        ...state,
        resumeData: action.payload
      };
    default:
      return state;
  }
}
