import React, { Component } from 'react';
import { connect } from 'react-redux';

// Local Components
import View from './View';

class TemplateEducationInfo extends Component {
  render() {
    return (
      <View
        template={this.props.template}
        education_infos={this.props.education_infos}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  education_infos: state.data.resumeData.education_infos
});

export default connect(mapStateToProps)(TemplateEducationInfo);
