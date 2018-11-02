import React from 'react';
import ReactDOM from 'react-dom';

import ResumeEditorPage from '../pages/ResumeEditorPage';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<ResumeEditorPage />, document.getElementById('resume'));
});
