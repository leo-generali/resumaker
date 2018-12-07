import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';
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

  updateJobInfoSection = (jobIndex) => (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const data = update(this.state.data, {
      job_infos: {
        [jobIndex]: { [name]: { $set: value } }
      }
    });
    this.setState({ data });
  };

  render() {
    console.log(this.props.data.isLoaded);
    return this.props.data.isLoaded && <View />;
  }
}

const mapStateToProps = (state, props) => {
  return {
    data: state.data
  };
};

const mapActionsToProps = {
  onFetchResumeData: fetchResumeData
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ResumeEditorPage);
