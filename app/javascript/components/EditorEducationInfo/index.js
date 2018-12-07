import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEducationInfoSection } from '../../actions/resumeEditor/educationInfoActions';
// Local Components
import View from './View';

class EditorEducationInfo extends Component {
  render() {
    return (
      <View
        education_infos={this.props.education_infos}
        updateEducationInfoSection={this.props.onUpdateEducationInfoSection}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    education_infos: state.data.resumeData.education_infos
  };
};

export default connect(
  mapStateToProps,
  { onUpdateEducationInfoSection: updateEducationInfoSection }
)(EditorEducationInfo);
