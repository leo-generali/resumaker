import { UPDATE_BASIC_INFO_FORM } from '../../actions/resumeEditor/types';

const initialState = { test: 'hello' };

export default function(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case UPDATE_BASIC_INFO_FORM:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
