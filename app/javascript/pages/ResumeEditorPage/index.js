import React, { Component } from 'react';
import axios from 'axios';

// Local Components
import Resume from '../../components/Resume';

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
        this.setState({ isLoaded: true, data });
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLoaded && (
          <Resume data={this.state.data} template={this.state.template} />
        )}
      </React.Fragment>
    );
  }
}

export default ResumeEditorPage;
