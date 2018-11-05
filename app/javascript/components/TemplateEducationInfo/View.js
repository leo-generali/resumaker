import React from 'react';

// Local Components

const View = ({ template, education_infos }) => {
  const templates = {
    1: <TemplateOne education_infos={education_infos} />
  };

  return templates[template];
};

const TemplateOne = ({ education_infos }) => {
  return (
    <div className="template-one__section template-one__education-section">
      <div className="template-one__section-seperator" />
      <p className="template-one__section-header">Education</p>
      <div className="template-one__section-seperator" />
      {education_infos.map((education_info) => {
        return (
          <div>
            <p>{education_info.institution}</p>
            <p>
              {education_info.start_date} - {education_info.end_date}
            </p>
            <p>{education_info.area}</p>
          </div>
        );
      })}
    </div>
  );
};

export default View;
