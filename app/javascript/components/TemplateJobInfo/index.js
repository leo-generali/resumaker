import React, { Component } from 'react';

// Local Components
import View from './View';

class index extends Component {
  render() {
    return (
      <View template={this.props.template} job_infos={this.props.job_infos} />
    );
  }
}

export default index;
