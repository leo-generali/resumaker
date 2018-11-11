import React from 'react';

// Local Components

const View = (props) => {
  return (
    <div className="editor">
      <div className="editor-selector">
        {props.children.map((component) => (
          <button
            onClick={() => props.changeSelectedEditor(component.props.name)}
          >
            {component.props.name}
          </button>
        ))}
      </div>
      <div className="editor-displayed-section">
        {props.children.filter((component) => {
          return component.props.name === props.selectedEditor;
        })}
      </div>
    </div>
  );
};

export default View;
