import React, { Component } from 'react';

// Local Components
import View from './View';

class EditorEducationInfo extends Component {
  render() {
    return (
      <View
        education_infos={this.props.education_infos}
        updateEducationInfoSection={this.props.updateEducationInfoSection}
      />
    );
  }
}

export default EditorEducationInfo;
