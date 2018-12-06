import axios from 'axios';

import {
  FETCH_RESUME_DATA_BEGIN,
  FETCH_RESUME_DATA_SUCCESS,
  FETCH_RESUME_DATA_FAILURE
} from './types';

export const fetchResumeDataBegin = () => ({
  type: FETCH_RESUME_DATA_BEGIN
});

export const fetchResumeDataSuccess = (resumeData) => {
  return {
    type: FETCH_RESUME_DATA_SUCCESS,
    payload: resumeData
  };
};

export const fetchResumeData = (id) => (dispatch) => {
  dispatch(fetchResumeDataBegin());
  axios.get(`/api/v1/resume/29`).then((res) => {
    const { data } = res;
    dispatch(fetchResumeDataSuccess(data));
  });
};
