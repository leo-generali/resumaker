import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';

// Local Components
import View from './View';

class ResumeEditorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      template: 1,
      data: {}
    };

    this.updateBasicInfoSection = this.updateBasicInfoSection.bind(this);
    this.updateSkillInfoSection = this.updateSkillInfoSection.bind(this);
    this.updateEducationInfoSection = this.updateEducationInfoSection.bind(
      this
    );
    this.addSkill = this.addSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
  }

  componentDidMount() {
    const arr = window.location.pathname.split('/');
    const resumeId = arr[arr.length - 1];
    if (!!resumeId) {
      console.log("on page that's linked to a resume! 🎉");
      axios.get(`/api/v1/resume/${resumeId}`).then((res) => {
        const { data } = res;
        console.log(data);
        this.setState({ isLoaded: true, data });
      });
    }
  }

  updateBasicInfoSection = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const data = update(this.state.data, {
      basic_info: { [name]: { $set: value } }
    });
    this.setState({ data });
  };

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

  addSkill = (skillInfoIndex, skillInfoID) => (event) => {
    event.preventDefault();
    axios
      .put('/api/v1/add-skill', {
        skill_info_id: skillInfoID
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

  removeSkill = (skillInfoIndex, skillInfoID) => (event) => {
    event.preventDefault();
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
    return (
      this.state.isLoaded && (
        <View
          data={this.state.data}
          updateBasicInfoSection={this.updateBasicInfoSection}
          updateSkillInfoSection={this.updateSkillInfoSection}
          updateEducationInfoSection={this.updateEducationInfoSection}
          template={this.state.template}
          addSkill={this.addSkill}
          removeSkill={this.removeSkill}
        />
      )
    );
  }
}

export default ResumeEditorPage;
