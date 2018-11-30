import React from 'react';

const View = ({ template, job_infos }) => {
  const templates = {
    1: <TemplateOne job_infos={job_infos} />
  };

  return templates[template];
};

const TemplateOne = ({ job_infos }) => {
  return (
    <div className="template-one__job-section">
      <div className="template-one__section-seperator template-one__section-seperator--top" />
      <p className="template-one__section-header">Work</p>
      <div className="template-one__section-seperator template-one__section-seperator--bottom" />
      {job_infos.map((job_info, index) => {
        return (
          <div key={index} className="template-one__education-info">
            <p className="education-data education-data--left">
              {job_info.company}
            </p>
            <p className="education-data education-data--right">
              {job_info.date}
            </p>
            <p className="education-data education-data--left">
              {job_info.position}
            </p>
            <p className="education-data education-data--right">
              {job_info.location}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default View;
