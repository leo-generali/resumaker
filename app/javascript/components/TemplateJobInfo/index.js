import React, { Component } from 'react';
import { connect } from 'react-redux';

// Local Components
import View from './View';

class TemplateJobInfo extends Component {
  render() {
    return (
      <View template={this.props.template} job_infos={this.props.job_infos} />
    );
  }
}

const mapStateToProps = (state) => ({
  job_infos: state.data.resumeData.job_infos
});

export default connect(
  mapStateToProps,
  {}
)(TemplateJobInfo);
