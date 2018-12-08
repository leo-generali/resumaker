import React from 'react';

// Local Components
import TemplateBasicInfo from '../TemplateBasicInfo';
import TemplateEducationInfo from '../TemplateEducationInfo';
import TemplateSkillInfo from '../TemplateSkillInfo';
import TemplateJobInfo from '../TemplateJobInfo';

const View = ({ data, template }) => {
  return (
    <div className="resume-preview">
      <div className="template-one">
        <TemplateBasicInfo template={template} />
        <TemplateSkillInfo template={template} />
        <TemplateEducationInfo template={template} />
        <TemplateJobInfo template={template} />
      </div>
    </div>
  );
};

export default View;
