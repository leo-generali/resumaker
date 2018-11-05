import React from 'react';

// Local Components
import TemplateBasicInfo from '../TemplateBasicInfo';

const View = ({ data, template }) => {
  return (
    <div className="resume-preview">
      <TemplateBasicInfo template={template} basic_info={data.basic_info} />
    </div>
  );
};

export default View;
