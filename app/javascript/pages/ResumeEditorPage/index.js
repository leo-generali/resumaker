import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResumeData } from '../../actions/resumeEditor/dataActions';

// Local Components
import View from './View';

class ResumeEditorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      template: 1
    };
  }

  componentDidMount() {
    this.props.onFetchResumeData();
  }

  render() {
    return this.props.isLoaded && <View />;
  }
}

const mapStateToProps = (state) => ({
  isLoaded: state.data.isLoaded
});

const mapActionsToProps = {
  onFetchResumeData: fetchResumeData
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ResumeEditorPage);
