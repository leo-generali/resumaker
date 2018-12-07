import React from 'react';

const View = (props) => {
  console.log(props);
  return (
    <form className="editor-education-info">
      {props.education_infos.map((educationInfo, index) => {
        return (
          <div key={index}>
            <div>
              <label htmlFor="institution">School:</label>
              <input
                value={educationInfo.institution}
                type="text"
                name="institution"
                onChange={props.updateEducationInfoSection(index)}
              />
            </div>
            <div>
              <label htmlFor="area">Degree:</label>
              <input
                value={educationInfo.degree}
                type="text"
                name="area"
                onChange={props.updateEducationInfoSection(index)}
              />
            </div>
            <div>
              <label htmlFor="study_type">Major:</label>
              <input
                value={educationInfo.study_type}
                type="text"
                name="study_type"
                onChange={props.updateEducationInfoSection(index)}
              />
            </div>
            <div>
              <label htmlFor="institution">Start Date:</label>
              <input
                value={educationInfo.start_date}
                type="text"
                name="start_date"
                onChange={props.updateEducationInfoSection(index)}
              />
            </div>
            <div>
              <label htmlFor="institution">End Date:</label>
              <input
                value={educationInfo.end_date}
                type="text"
                name="end_date"
                onChange={props.updateEducationInfoSection(index)}
              />
            </div>
            <div>
              <label htmlFor="institution">Location:</label>
              <input
                value={educationInfo.location}
                type="text"
                name="location"
                onChange={props.updateEducationInfoSection(index)}
              />
            </div>
            <div>
              <label htmlFor="institution">GPA:</label>
              <input
                value={educationInfo.gpa}
                type="text"
                name="gpa"
                onChange={props.updateEducationInfoSection(index)}
              />
            </div>
          </div>
        );
      })}
    </form>
  );
};

export default View;
