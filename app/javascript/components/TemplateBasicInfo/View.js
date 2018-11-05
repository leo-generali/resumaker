import React from 'react';

// Local Components
import { Email, PersonalWebsite, Github, LinkedIn } from './ProfileData';

const View = ({ template, basic_info }) => {
  const templates = {
    1: <TemplateOne basic_info={basic_info} />
  };

  return templates[template];
};

const TemplateOne = ({ basic_info }) => {
  return (
    <div className="template-one__info-section">
      <h1 className="name">{basic_info.name}</h1>
      <div className="info-container">
        {!!basic_info.email && <Email>{basic_info.email}</Email>}
        {!!basic_info.website && (
          <PersonalWebsite>{basic_info.website}</PersonalWebsite>
        )}
        {!!basic_info.phone && <span>{basic_info.phone} • </span>}
        {!!basic_info.github && <Github>{basic_info.github}</Github>}
        {!!basic_info.linkedin && <LinkedIn>{basic_info.linkedin}</LinkedIn>}
      </div>
    </div>
  );
};

export default View;
