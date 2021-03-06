import React, { Component } from 'react';

// Local Components
import View from './View';

class Button extends Component {
  render() {
    return <View {...this.props} />;
  }
}

export default Button;
