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

  updateEducationInfoSection = (educationIndex) => (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const data = update(this.state.data, {
      education_infos: {
        [educationIndex]: { [name]: { $set: value } }
      }
    });
    this.setState({ data });
  };

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

  // removeSkill = (skillInfoIndex, skillInfoID) => (event) => {
  //   event.preventDefault();
  //   const len = this.state.data.skill_infos[skillInfoIndex].skills.length;
  //   if (len === 1) return;
  //   axios
  //     .delete('/api/v1/remove-skill', {
  //       data: { skill_info_id: skillInfoID }
  //     })
  //     .then((res) => {
  //       const data = update(this.state.data, {
  //         skill_infos: {
  //           [skillInfoIndex]: { skills: { $set: res.data.skills } }
  //         }
  //       });
  //       this.setState({ data });
  //     });
  // };

  render() {
    console.log(this.props.data.isLoaded);
    return (
      this.props.data.isLoaded && (
        <View />
        // <View
        // data={this.state.data}
        // updateSkillInfoSection={this.updateSkillInfoSection}
        // updateEducationInfoSection={this.updateEducationInfoSection}
        // updateJobInfoSection={this.updateJobInfoSection}
        // template={this.state.template}
        // addSkill={this.addSkill}
        // removeSkill={this.removeSkill}
        // />
      )
    );
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
