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
  }

  componentDidMount() {
    const arr = window.location.pathname.split('/');
    const resumeId = arr[arr.length - 1];
    if (!!resumeId) {
      console.log("on page that's linked to a resume! 🎉");
      axios.get(`/api/v1/resume/${resumeId}`).then((res) => {
        const { data } = res;
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

  render() {
    return (
      this.state.isLoaded && (
        <View
          data={this.state.data}
          updateBasicInfoSection={this.updateBasicInfoSection}
          updateSkillInfoSection={this.updateSkillInfoSection}
          template={this.state.template}
        />
      )
    );
  }
}

export default ResumeEditorPage;
