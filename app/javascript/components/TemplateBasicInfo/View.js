import React from 'react';

// Local Components
import { Email, PersonalWebsite, Github, LinkedIn } from './ProfileData';

const View = ({ template, basic_info }) => {
  const templates = {
    1: <TemplateOne basic_info={basic_info} />,
    2: <TemplateTwo basic_info={basic_info} />
  };

  return templates[template];
};

const TemplateOne = ({ basic_info }) => {
  return (
    <div className="template-one">
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
    </div>
  );
};

const TemplateTwo = ({ basic_info }) => {
  return (
    <div className="template-one">
      <div className="template-one__info-section">
        <h1 className="name">{basic_info.name}</h1>
        <h1 className="name">{basic_info.name}</h1>
        <h1 className="name">{basic_info.name}</h1>
        <h1 className="name">{basic_info.name}</h1>
        <div className="info-container">
          <span>{basic_info.email} • </span>
          <span>{basic_info.website} • </span>
          <span>{basic_info.phone} • </span>
          <span>{basic_info.github} • </span>
          <span>{basic_info.linkedin}</span>
        </div>
      </div>
    </div>
  );
};

export default View;
