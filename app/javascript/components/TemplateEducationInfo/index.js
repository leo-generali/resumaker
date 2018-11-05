import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Local Components
import View from './View';

class index extends Component {
  render() {
    return (
      <View
        template={this.props.template}
        education_infos={this.props.education_infos}
      />
    );
  }
}

index.propTypes = {};

export default index;
