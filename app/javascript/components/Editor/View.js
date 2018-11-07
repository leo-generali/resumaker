import React from 'react';

// Local Components
import EditorBasicInfo from '../EditorBasicInfo';
import EditorSkillInfo from '../EditorSkillInfo';
import EditorEducationInfo from '../EditorEducationInfo';

const View = (props) => {
  return (
    <div className="editor">
      <EditorBasicInfo
        basic_info={props.data.basic_info}
        updateBasicInfoSection={props.updateBasicInfoSection}
      />
      <EditorSkillInfo
        skill_infos={props.data.skill_infos}
        updateSkillInfoSection={props.updateSkillInfoSection}
      />
      <EditorEducationInfo
        education_infos={props.data.education_infos}
        updateEducationInfoSection={props.updateEducationInfoSection}
      />
    </div>
  );
};

export default View;
