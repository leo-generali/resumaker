import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateSkillInfoSection,
  addSkill,
  removeSkill
} from '../../actions/resumeEditor/skillInfoActions';

// Local Components
import View from './View';

class EditorSkillInfo extends Component {
  render() {
    console.log(this.props);

    return (
      <View
        skill_infos={this.props.skill_infos}
        updateSkillInfoSection={this.props.onUpdateSkillInfoSection}
        addSkill={this.props.onAddSkill}
        removeSkill={this.props.onRemoveSkill}
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
    onAddSkill: addSkill,
    onRemoveSkill: removeSkill
  }
)(EditorSkillInfo);
