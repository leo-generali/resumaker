import React from 'react';

// Local Components
import Editor from '../../components/Editor';
import ResumePreview from '../../components/ResumePreview';

const View = (props) => {
  return (
    <React.Fragment>
      <Editor
        data={props.data}
        updateBasicInfoSection={props.updateBasicInfoSection}
        updateSkillInfoSection={props.updateSkillInfoSection}
        updateEducationInfoSection={props.updateEducationInfoSection}
      />
      <ResumePreview data={props.data} template={props.template} />
    </React.Fragment>
  );
};

export default View;
