import React, { Component } from 'react';

// Local Components
import View from './View';
import EditorBasicInfo from '../EditorBasicInfo';
import EditorSkillInfo from '../EditorSkillInfo';
import EditorEducationInfo from '../EditorEducationInfo';

class Editor extends Component {
  state = {
    selectedEditor: ''
  };

  changeSelectedEditor = (selectedEditor) => {
    this.setState({ selectedEditor });
  };

  render() {
    return (
      <View
        data={this.props.data}
        selectedEditor={this.state.selectedEditor}
        changeSelectedEditor={this.changeSelectedEditor}
        updateBasicInfoSection={this.props.updateBasicInfoSection}
        updateSkillInfoSection={this.props.updateSkillInfoSection}
        updateEducationInfoSection={this.props.updateEducationInfoSection}
      >
        <EditorBasicInfo
          name="Basic Info"
          basic_info={this.props.data.basic_info}
          updateBasicInfoSection={this.props.updateBasicInfoSection}
        />
        <EditorSkillInfo
          name="Skill Info"
          skill_infos={this.props.data.skill_infos}
          updateSkillInfoSection={this.props.updateSkillInfoSection}
        />
        <EditorEducationInfo
          name="Education Info"
          education_infos={this.props.data.education_infos}
          updateEducationInfoSection={this.props.updateEducationInfoSection}
        />
      </View>
    );
  }
}

export default Editor;
