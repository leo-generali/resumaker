import React, { Component } from 'react';

// Local Components
import View from './View';

class EditorSkillInfo extends Component {
  render() {
    return (
      <View
        skill_infos={this.props.skill_infos}
        updateSkillInfoSection={this.props.updateSkillInfoSection}
        addSkill={this.props.addSkill}
        removeSkill={this.props.removeSkill}
      />
    );
  }
}

export default EditorSkillInfo;
