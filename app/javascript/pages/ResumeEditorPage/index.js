import React, { Component } from 'react';

// Local Components
import Resume from '../../components/Resume';

class ResumeEditorPage extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Resume editor page</p>
        <Resume />
      </React.Fragment>
    );
  }
}

export default ResumeEditorPage;
