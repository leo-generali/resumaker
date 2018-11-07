import React, { Component } from 'react';

// Local Components
import View from './View';

class Editor extends Component {
  render() {
    return (
      <View
        data={this.props.data}
        updateBasicInfoSection={this.props.updateBasicInfoSection}
        updateSkillInfoSection={this.props.updateSkillInfoSection}
        updateEducationInfoSection={this.props.updateEducationInfoSection}
      />
    );
  }
}

export default Editor;