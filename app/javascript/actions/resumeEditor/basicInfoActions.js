import update from 'immutability-helper';

import { UPDATE_RESUME_FORM_INPUT } from './types';

export const updateBasicInfoSection = (event) => (dispatch, getState) => {
  const value = event.target.value;
  const name = event.target.name;
  const { resumeData } = getState().data;

  const data = update(resumeData, {
    basic_info: {
      [name]: { $set: value }
    }
  });

  dispatch({
    type: UPDATE_RESUME_FORM_INPUT,
    payload: data
  });
};
