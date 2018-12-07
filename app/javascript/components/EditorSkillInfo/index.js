import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateSkillInfoSection,
  updateSkillInfoCategory,
  addSkill,
  removeSkill,
  addSkillCategory,
  removeSkillCategory
} from '../../actions/resumeEditor/skillInfoActions';

// Local Components
import View from './View';

class EditorSkillInfo extends Component {
  render() {
    return (
      <View
        skill_infos={this.props.skill_infos}
        updateSkillInfoSection={this.props.onUpdateSkillInfoSection}
        updateSkillInfoCategory={this.props.onUpdateSkillInfoCategory}
        addSkill={this.props.onAddSkill}
        removeSkill={this.props.onRemoveSkill}
        addSkillCategory={this.props.onAddSkillCategory}
        removeSkillCategory={this.props.onRemoveSkillCategory}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    skill_infos: state.data.resumeData.skill_infos
  };
};

export default connect(
  mapStateToProps,
  {
    onUpdateSkillInfoSection: updateSkillInfoSection,
    onUpdateSkillInfoCategory: updateSkillInfoCategory,
    onAddSkill: addSkill,
    onRemoveSkill: removeSkill,
    onAddSkillCategory: addSkillCategory,
    onRemoveSkillCategory: removeSkillCategory
  }
)(EditorSkillInfo);
