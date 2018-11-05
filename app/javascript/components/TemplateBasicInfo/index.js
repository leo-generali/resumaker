import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Local Components
import View from './View';

class index extends Component {
  render() {
    return (
      <View template={this.props.template} basic_info={this.props.basic_info} />
    );
  }
}

index.propTypes = {};

export default index;
