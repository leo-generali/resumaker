import React, { Component } from 'react';
import axios from 'axios';

// Local Components
import View from './View';

class ResumeEditorPage extends Component {
  state = {
    isLoaded: false,
    template: 1,
    data: {}
  };

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

  render() {
    return (
      this.state.isLoaded && (
        <View data={this.state.data} template={this.state.template} />
      )
    );
  }
}

export default ResumeEditorPage;
