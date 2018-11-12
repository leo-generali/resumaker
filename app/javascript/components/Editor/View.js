import React from 'react';

// Local Components
import EditorSelector from '../EditorSelector';
import EditorDisplayedSection from '../EditorDisplayedSection';

const View = (props) => {
  return (
    <div className="editor">
      <EditorSelector
        editorSections={props.editorSections}
        selectedEditor={props.selectedEditor}
        changeSelectedEditor={props.changeSelectedEditor}
      />
      <EditorDisplayedSection
        editorSections={props.editorSections}
        selectedEditor={props.selectedEditor}
      />
    </div>
  );
};

export default View;
