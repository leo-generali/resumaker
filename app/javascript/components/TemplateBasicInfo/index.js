import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Local Components
import View from './View';

class TemplateBasicInfo extends Component {
  render() {
    console.log('template basic info', this.props);
    return (
      <View template={this.props.template} basic_info={this.props.basic_info} />
      // <h1>asdasd</h1>
      // <View />
    );
  }
}

TemplateBasicInfo.propTypes = {};

const mapStateToProps = (state, props) => {
  return {
    basic_info: state.data.resumeData.basic_info
  };
};

export default connect(mapStateToProps)(TemplateBasicInfo);
