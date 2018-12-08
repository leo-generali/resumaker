import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateJobInfoSection } from '../../actions/resumeEditor/jobInfoActions';

// Local Components
import View from './View';

class EditorJobInfo extends Component {
  render() {
    return (
      <View
        job_infos={this.props.job_infos}
        updateJobInfoSection={this.props.onUpdateJobInfoSection}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  job_infos: state.data.resumeData.job_infos
});

export default connect(
  mapStateToProps,
  { onUpdateJobInfoSection: updateJobInfoSection }
)(EditorJobInfo);
