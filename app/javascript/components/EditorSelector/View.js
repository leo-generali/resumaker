import React from 'react';

// Local Components
import Button from '../Button';

const View = (props) => {
  return (
    <div className="editor-selector">
      <p>Editor Selector</p>
      {props.editorSections.map((component, index) => (
        <Button
          key={index}
          classes={
            props.selectedEditor === component.props.name
              ? 'button-editor-selector button-editor-selector--active'
              : 'button-editor-selector'
          }
          onClick={() => props.changeSelectedEditor(component.props.name)}
        >
          {component.props.name}
        </Button>
      ))}
    </div>
  );
};

export default View;
