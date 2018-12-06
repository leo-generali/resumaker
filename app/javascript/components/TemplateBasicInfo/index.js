import React, { Component } from 'react';
import { connect } from 'react-redux';

// Local Components
import View from './View';

class TemplateBasicInfo extends Component {
  render() {
    return (
      <View template={this.props.template} basic_info={this.props.basic_info} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    basic_info: state.data.resumeData.basic_info
  };
};

export default connect(mapStateToProps)(TemplateBasicInfo);
