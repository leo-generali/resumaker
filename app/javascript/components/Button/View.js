import React from 'react';

const View = (props) => {
  return (
    <button className={`button ${props.classNames}`} {...props}>
      <p>{props.children}</p>
    </button>
  );
};

export default View;
