import React, { Component } from 'react';

// Local Components
import View from './View';

class EditorJobInfo extends Component {
  render() {
    return <View job_infos={this.props.job_infos} />;
  }
}

export default EditorJobInfo;
