import React from 'react';

// Local Components

const View = ({ template, skill_infos }) => {
  const templates = {
    1: <TemplateOne skill_infos={skill_infos} />
  };

  return templates[template];
};

const TemplateOne = ({ skill_infos }) => {
  return (
    <div className="template-one__section template-one__skill-section">
      <div className="template-one__section-seperator template-one__section-seperator--top" />
      <p className="template-one__section-header">Skills</p>
      <div className="template-one__section-seperator template-one__section-seperator--bottom" />
      {skill_infos.map((skill_info, skillInfoIndex) => {
        return (
          <div key={skillInfoIndex} className="skill-container">
            <span className="skill-container__category">
              {skill_info.category}:
            </span>
            <div className="skill-container__skill-wrapper">
              {skill_info.skills.map((skill, skillIndex) => {
                return (
                  <span key={skillIndex} className="skill-container__skill">
                    {skill}
                    {skill_info.skills.length > skillIndex + 1 ? ', ' : ''}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default View;
