import React, { Component } from 'react';

// Local Components
import View from './View';

class EditorBasicInfo extends Component {
  render() {
    return (
      <View
        updateBasicInfoSection={this.props.updateBasicInfoSection}
        {...this.props.basic_info}
      />
    );
  }
}

export default EditorBasicInfo;
