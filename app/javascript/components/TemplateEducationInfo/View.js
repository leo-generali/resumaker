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
      <div className="template-one__section-seperator template-one__section-seperator--top" />
      <p className="template-one__section-header">Education</p>
      <div className="template-one__section-seperator template-one__section-seperator--bottom" />
      {education_infos.map((education_info, index) => {
        return (
          <div key={index} className="template-one__education-info">
            <p className="education-data education-data--left">
              {education_info.institution}
            </p>
            <p className="education-data education-data--right">
              {education_info.start_date} - {education_info.end_date}
            </p>
            <p className="education-data education-data--left">
              {education_info.area}
            </p>
            <p className="education-data education-data--right">
              {education_info.location}
            </p>
            <p className="education-data education-data--left">
              {education_info.study_type}
            </p>
            <p className="education-data education-data--right">
              GPA: {education_info.gpa}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default View;
