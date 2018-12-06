import axios from 'axios';
import update from 'immutability-helper';

import { UPDATE_RESUME_FORM_INPUT, ADD_SKILL, REMOVE_SKILL } from './types';

export const updateSkillInfoSection = (skillInfoIndex, skillIndex) => (
  dispatch,
  getState
) => (event) => {
  const value = event.target.value;
  const { resumeData } = getState().data;

  const data = update(resumeData, {
    skill_infos: {
      [skillInfoIndex]: { skills: { [skillIndex]: { $set: value } } }
    }
  });

  dispatch({
    type: UPDATE_RESUME_FORM_INPUT,
    payload: data
  });
};

export const addSkill = (skillInfoIndex, skillInfoID) => (
  dispatch,
  getState
) => (event) => {
  event.preventDefault();
  const { resumeData } = getState().data;
  const len = resumeData.skill_infos[skillInfoIndex].skills.length;
  const val = resumeData.skill_infos[skillInfoIndex].skills[len - 1];
  if (!!!val) return;
  const skillInfoData = resumeData.skill_infos.filter((skillInfo) => {
    return skillInfo.id === skillInfoID;
  });
  axios
    .put('/api/v1/add-skill', {
      skill_info_id: skillInfoID,
      skill_info_data: skillInfoData[0]
    })
    .then((res) => {
      const data = update(resumeData, {
        skill_infos: {
          [skillInfoIndex]: { skills: { $push: [''] } }
        }
      });
      dispatch({
        type: ADD_SKILL,
        payload: data
      });
    });
};

export const removeSkill = (skillInfoIndex, skillInfoID) => (
  dispatch,
  getState
) => (event) => {
  event.preventDefault();
  const { resumeData } = getState().data;
  const len = resumeData.skill_infos[skillInfoIndex].skills.length;
  if (len === 1) return;
  axios
    .delete('/api/v1/remove-skill', {
      data: { skill_info_id: skillInfoID }
    })
    .then((res) => {
      const data = update(resumeData, {
        skill_infos: {
          [skillInfoIndex]: { skills: { $set: res.data.skills } }
        }
      });
      dispatch({
        type: REMOVE_SKILL,
        payload: data
      });
    });
};
