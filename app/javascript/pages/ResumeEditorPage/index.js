import React, { Component } from 'react';
import axios from 'axios';

// Local Components
import Resume from '../../components/Resume';

class ResumeEditorPage extends Component {
  componentDidMount() {
    const arr = window.location.pathname.split('/');
    const resumeId = arr[arr.length - 1];
    if (!!resumeId) {
      console.log("on page that's linked to a resume! 🎉");
      axios.get(`/api/v1/resume/${resumeId}`).then((res) => {
        console.log(res);
        const { data } = res;
        console.log('and the data is:');
        console.log(data);
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <p>Resume editor page</p>
        <Resume />
      </React.Fragment>
    );
  }
}

export default ResumeEditorPage;
