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

    this.updateSkillInfoSection = this.updateSkillInfoSection.bind(this);
    this.updateEducationInfoSection = this.updateEducationInfoSection.bind(
      this
    );
    this.updateJobInfoSection = this.updateJobInfoSection.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
  }

  componentDidMount() {
    this.props.onfetchResumeData();
  }

  updateSkillInfoSection = (skillInfoIndex, skillIndex) => (event) => {
    const value = event.target.value;
    const data = update(this.state.data, {
      skill_infos: {
        [skillInfoIndex]: { skills: { [skillIndex]: { $set: value } } }
      }
    });
    this.setState({ data });
  };

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

  addSkill = (skillInfoIndex, skillInfoID) => (event) => {
    event.preventDefault();
    const len = this.state.data.skill_infos[skillInfoIndex].skills.length;
    const val = this.state.data.skill_infos[skillInfoIndex].skills[len - 1];
    if (!!!val) return;
    const skillInfoData = this.state.data.skill_infos.filter((skillInfo) => {
      return skillInfo.id === skillInfoID;
    });
    axios
      .put('/api/v1/add-skill', {
        skill_info_id: skillInfoID,
        skill_info_data: skillInfoData[0]
      })
      .then((res) => {
        const data = update(this.state.data, {
          skill_infos: {
            [skillInfoIndex]: { skills: { $push: [''] } }
          }
        });
        this.setState({ data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  removeSkill = (skillInfoIndex, skillInfoID) => (event) => {
    event.preventDefault();
    const len = this.state.data.skill_infos[skillInfoIndex].skills.length;
    if (len === 1) return;
    axios
      .delete('/api/v1/remove-skill', {
        data: { skill_info_id: skillInfoID }
      })
      .then((res) => {
        const data = update(this.state.data, {
          skill_infos: {
            [skillInfoIndex]: { skills: { $set: res.data.skills } }
          }
        });
        this.setState({ data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
  console.log('mapping state to props');
  console.log(state, props);
  return {
    data: state.data
  };
};

const mapActionsToProps = {
  onfetchResumeData: fetchResumeData
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ResumeEditorPage);
