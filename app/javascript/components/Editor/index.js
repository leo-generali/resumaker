import React, { Component } from 'react';

// Local Components
import View from './View';
import EditorBasicInfo from '../EditorBasicInfo';
import EditorSkillInfo from '../EditorSkillInfo';
import EditorEducationInfo from '../EditorEducationInfo';
import EditorJobInfo from '../EditorJobInfo';

class Editor extends Component {
  state = {
    selectedEditor: 'Education Info'
  };

  changeSelectedEditor = (selectedEditor) => {
    this.setState({ selectedEditor });
  };

  render() {
    return (
      <View
        selectedEditor={this.state.selectedEditor}
        changeSelectedEditor={this.changeSelectedEditor}
        editorSections={[
          <EditorBasicInfo name="Basic Info" />,
          <EditorSkillInfo name="Skill Info" />,
          <EditorEducationInfo name="Education Info" />
          // <EditorJobInfo
          //   name="Job Info"
          //   job_infos={this.props.data.job_infos}
          //   updateJobInfoSection={this.props.updateJobInfoSection}
          // />
        ]}
      />
    );
  }
}

export default Editor;
