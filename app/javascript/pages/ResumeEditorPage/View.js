import React from 'react';

// Local Components
import Sidebar from '../../components/Sidebar';
import ResumePreview from '../../components/ResumePreview';

const View = (props) => {
  return (
    <React.Fragment>
      <Sidebar />
      <ResumePreview data={props.data} template={props.template} />
    </React.Fragment>
  );
};

export default View;
