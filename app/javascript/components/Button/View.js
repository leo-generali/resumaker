import React from 'react';

const View = (props) => {
  return (
    <button className={`${props.classes}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default View;
