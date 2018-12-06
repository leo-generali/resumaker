import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import resumeEditorStore from '../store/resumeEditorStore';

import ResumeEditorPage from '../pages/ResumeEditorPage';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={resumeEditorStore}>
      <ResumeEditorPage />
    </Provider>,
    document.getElementById('resume')
  );
});
