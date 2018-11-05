import React from 'react';

// Local Components
import TemplateBasicInfo from '../TemplateBasicInfo';
import TemplateEducationInfo from '../TemplateEducationInfo';

const View = ({ data, template }) => {
  return (
    <div className="resume-preview">
      <div className="template-one">
        <TemplateBasicInfo template={template} basic_info={data.basic_info} />
        <TemplateEducationInfo
          template={template}
          education_infos={data.education_infos}
        />
      </div>
    </div>
  );
};

export default View;
