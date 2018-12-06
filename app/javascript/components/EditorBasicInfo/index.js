import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBasicInfoSection } from '../../actions/resumeEditor/basicInfoActions';

// Local Components
import View from './View';

class EditorBasicInfo extends Component {
  render() {
    console.log(this.props);
    return (
      <View
        updateBasicInfoSection={this.props.updateBasicInfoSection}
        {...this.props.basic_info}
        item={this.props.item}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log('in map state to props');
  console.log(state, props);

  return {
    item: state.basicInfo.item
  };
};

export default connect(
  mapStateToProps,
  { updateBasicInfoSection }
)(EditorBasicInfo);
