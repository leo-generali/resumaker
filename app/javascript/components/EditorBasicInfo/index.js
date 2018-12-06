import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBasicInfoSection } from '../../actions/resumeEditor/basicInfoActions';

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

const mapStateToProps = (state, props) => {
  return {
    basic_info: state.data.resumeData.basic_info
  };
};

export default connect(
  mapStateToProps,
  { updateBasicInfoSection }
)(EditorBasicInfo);
