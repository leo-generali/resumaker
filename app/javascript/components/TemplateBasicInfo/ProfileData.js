import React from 'react';

const Email = ({ children }) => {
  return <React.Fragment>{children} • </React.Fragment>;
};

const PersonalWebsite = ({ children }) => {
  return (
    <React.Fragment>
      <a href={children}>{children.replace(/https?:\/\//g, '')}</a> •{' '}
    </React.Fragment>
  );
};

const Github = ({ children }) => {
  return (
    <React.Fragment>
      <a href={children}>{children.replace(/https?:\/\//g, '')}</a> •{' '}
    </React.Fragment>
  );
};

const LinkedIn = ({ children }) => {
  return (
    <React.Fragment>
      <a href={children}>
        {children.replace(/(https:\/\/www\.linkedin.com\/in\/)/g, 'in/')}
      </a>
    </React.Fragment>
  );
};

export { Email, PersonalWebsite, Github, LinkedIn };
