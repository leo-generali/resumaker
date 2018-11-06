import React from 'react';

// Local Components
import EditorBasicInfo from '../EditorBasicInfo';
import EditorSkillInfo from '../EditorSkillInfo';

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
    </div>
  );
};

export default View;
