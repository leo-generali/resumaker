import React, { Component } from 'react';

// Local Components
import View from './View';
import EditorBasicInfo from '../EditorBasicInfo';
import EditorSkillInfo from '../EditorSkillInfo';
import EditorEducationInfo from '../EditorEducationInfo';

class Editor extends Component {
  state = {
    selectedEditor: 'Skill Info'
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
        editorSections={[
          <EditorBasicInfo
            name="Basic Info"
            basic_info={this.props.data.basic_info}
            updateBasicInfoSection={this.props.updateBasicInfoSection}
          />,
          <EditorSkillInfo
            name="Skill Info"
            skill_infos={this.props.data.skill_infos}
            updateSkillInfoSection={this.props.updateSkillInfoSection}
            addSkill={this.props.addSkill}
            removeSkill={this.props.removeSkill}
          />,
          <EditorEducationInfo
            name="Education Info"
            education_infos={this.props.data.education_infos}
            updateEducationInfoSection={this.props.updateEducationInfoSection}
          />
        ]}
      />
    );
  }
}

export default Editor;
