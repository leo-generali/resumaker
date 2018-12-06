import { UPDATE_BASIC_INFO_FORM } from './types';

export const updateBasicInfoSection = (event) => (dispatch) => {
  const value = event.target.value;
  const name = event.target.name;
  console.log('in the basic info redux action!');
  console.log(value, name);
  dispatch({
    type: UPDATE_BASIC_INFO_FORM,
    payload: value
  });
};
