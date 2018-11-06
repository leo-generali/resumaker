import React from 'react';

const View = (props) => {
  return (
    <form className="editor-basic-info">
      <label>
        Name:
        <input
          value={props.name}
          onChange={props.updateBasicInfoSection}
          type="text"
          name="name"
        />
      </label>
      <label>
        Email:
        <input
          value={props.email}
          onChange={props.updateBasicInfoSection}
          type="text"
          name="email"
        />
      </label>
      <label>
        Website:
        <input
          value={props.website}
          onChange={props.updateBasicInfoSection}
          type="text"
          name="website"
        />
      </label>
      <label>
        Phone:
        <input
          value={props.phone}
          onChange={props.updateBasicInfoSection}
          type="text"
          name="phone"
        />
      </label>
      <label>
        Github
        <input
          value={props.github}
          onChange={props.updateBasicInfoSection}
          type="text"
          name="github"
        />
      </label>
      <label>
        LinkedIn:
        <input
          value={props.linkedin}
          onChange={props.updateBasicInfoSection}
          type="text"
          name="linkedin"
        />
      </label>
    </form>
  );
};

export default View;
