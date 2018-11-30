import React, { Component } from 'react';

// Local Components
import View from './View';

class EditorJobInfo extends Component {
  render() {
    console.log(this.props);
    return (
      <View
        job_infos={this.props.job_infos}
        updateJobInfoSection={this.props.updateJobInfoSection}
      />
    );
  }
}

export default EditorJobInfo;
