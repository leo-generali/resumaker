import React from 'react';

const View = (props) => {
  return (
    <button className={`button ${props.classes}`} {...props}>
      <p>{props.children}</p>
    </button>
  );
};

export default View;
