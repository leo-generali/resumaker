import update from 'immutability-helper';

import { UPDATE_RESUME_FORM_INPUT } from './types';

export const updateEducationInfoSection = (schoolInfoIndex) => (
  dispatch,
  getState
) => (event) => {
  const value = event.target.value;
  const name = event.target.name;
  const { resumeData } = getState().data;
  const data = update(resumeData, {
    education_infos: {
      [schoolInfoIndex]: { [name]: { $set: value } }
    }
  });
  dispatch({
    type: UPDATE_RESUME_FORM_INPUT,
    payload: data
  });
};
