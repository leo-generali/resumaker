import React, { Component } from 'react';
import { connect } from 'react-redux';

// Local Components
import View from './View';

class TemplateSkillInfo extends Component {
  render() {
    return (
      <View
        template={this.props.template}
        skill_infos={this.props.skill_infos}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    skill_infos: state.data.resumeData.skill_infos
  };
};

export default connect(mapStateToProps)(TemplateSkillInfo);
